import { BlogFooter } from "@/src/components/blog-footer";
import { MDXBlogRenderer } from "@/src/components/blog-mdx-renderer";
import { getAllBlogPosts } from "@/src/helpers/mdx-helpers";
import { makeMetadataUrl } from "@/src/helpers/metadata-helpers";
import { Avatar } from "@/src/subframe/components/Avatar";
import * as SubframeCore from "@subframe/core";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PostParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: PostParams;
}): Promise<Metadata | undefined> {
  let post = getAllBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date: publishedTime, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime,
      url: makeMetadataUrl(`/blog/${post.slug}`),
      images: post.metadata.image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.metadata.image,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog({ params }: { params: PostParams }) {
  let post = getAllBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: post.metadata.image,
            url: `https://subframe.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.metadata.author,
            },
          }),
        }}
      />
      <Link
        className="flex items-center gap-1 text-subtext-color text-caption py-2 mb-6"
        href="/blog"
      >
        <SubframeCore.Icon name="FeatherArrowLeft" />
        Back to blog
      </Link>
      <h1 className="font-medium text-4xl tracking-tighter mb-3">
        {post.metadata.title}
      </h1>
      <h2 className="text-xl text-subtext-color">
        {post.metadata.description}
      </h2>
      <div className="flex items-center gap-1.5 mt-4">
        <Avatar size="x-small" image={post.metadata.authorImage} />
        <span className="text-body-bold text-subtext-color">
          {post.metadata.author}
        </span>

        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-subtext-color">
            • {formatDate(post.metadata.date)}
          </p>
        </Suspense>
      </div>
      <article className="mt-12 prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXBlogRenderer source={post.content} />
      </article>
      {/* break out of the rails for this */}
      <BlogFooter className="mt-16 -mx-16 w-auto mobile:mx-0" />
    </div>
  );
}
