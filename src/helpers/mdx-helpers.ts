import fs from "fs";
import path from "path";
import { DEFAULT_METADATA } from "./metadata-helpers";

interface Metadata {
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage: string;
  image: string;
  tag: "announcement" | "design" | "code";
}

interface BlogPost {
  metadata: Metadata;
  slug: string;
  content: string;
}

const DEFAULT_BLOG_METADATA: Partial<Metadata> = {
  author: "Subframe Author",
  authorImage: "/images/subframe-logo.png",
  image: DEFAULT_METADATA.image,
  tag: "announcement",
};

// NOTE: this should use gray-matter but it's deprecated
// Taken from https://github.com/leerob/leerob.io
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  // the default metadata if for some reason
  let metadata: Partial<Metadata> = {
    ...DEFAULT_BLOG_METADATA,
  };

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value as any;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getAllBlogPosts(): BlogPost[] {
  return getMDXData(path.join(process.cwd(), "src", "blog-posts"));
}
