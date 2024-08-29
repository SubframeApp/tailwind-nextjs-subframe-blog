import { getAllBlogPosts } from "@/src/helpers/mdx-helpers";
import {
  makeMetadata,
  DEFAULT_METADATA,
  makeMetadataUrl,
} from "@/src/helpers/metadata-helpers";
import { BlogPostCard } from "@/src/subframe/components/BlogPostCard";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = makeMetadata({
  title: "Subframe - Blog",
  description:
    "Latest thoughts on frontend best practices, design, announcements, and more.",
  image: DEFAULT_METADATA.image,
  url: makeMetadataUrl("/blog"),
});

export default function BlogPage() {
  const allBlogs = getAllBlogPosts();

  return (
    <div className="flex h-full w-full flex-col items-start gap-12 py-12 overflow-auto mobile:items-center">
      <div className="flex items-center gap-2">
        <span className="grow shrink-0 basis-0 text-heading-1 font-heading-1 text-default-font">
          Latest posts from Subframe
        </span>
      </div>
      <div className="flex flex-col items-start">
        <div className="grid grid-cols-3 mobile:grid-cols-1 items-start gap-10">
          {allBlogs
            .filter((post) => {
              // filter to those whose date is in the past
              return new Date(post.metadata.date) < new Date();
            })
            .sort((a, b) => {
              if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <BlogPostCard
                  className="w-full"
                  title={post.metadata.title}
                  tag={post.metadata.tag}
                  author={post.metadata.author}
                  authorImage={post.metadata.authorImage}
                  publishedDate={post.metadata.date}
                  imageChildren={
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      width={400}
                      height={210}
                    />
                  }
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
