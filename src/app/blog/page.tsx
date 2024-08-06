import { getAllBlogPosts } from "@/src/helpers/mdx-helpers";
import {
  makeMetadata,
  DEFAULT_METADATA,
  makeMetadataUrl,
} from "@/src/helpers/metadata-helpers";
import { BlogPostLink } from "@/src/subframe/components/BlogPostLink";
import { Metadata } from "next";
import Link from "next/link";

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
    <div>
      <h1 className="text-heading-2 mb-8">Latest posts from Subframe</h1>
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
            <BlogPostLink
              className="-mx-4"
              title={post.metadata.title}
              authorAvatar={post.metadata.authorImage}
              author={post.metadata.authorName}
              publishedAt={post.metadata.date}
            />
          </Link>
        ))}
    </div>
  );
}
