"use client";
/*
 * Documentation:
 * BlogPostCard — https://app.subframe.com/3b0b4e9f8fe8/library?component=BlogPostCard_94cc33c4-a4e8-4350-ba03-266d488ca18d
 * Avatar — https://app.subframe.com/3b0b4e9f8fe8/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "./Avatar";

interface BlogPostCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  author?: string;
  publishedDate?: string;
  tag?: "announcement" | "design" | "code";
  authorImage?: string;
  imageChildren?: React.ReactNode;
  className?: string;
}

const BlogPostCardRoot = React.forwardRef<HTMLElement, BlogPostCardRootProps>(
  function BlogPostCardRoot(
    {
      title,
      author,
      publishedDate,
      tag = "announcement",
      authorImage,
      imageChildren,
      className,
      ...otherProps
    }: BlogPostCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/94cc33c4 flex w-full flex-col items-start gap-4 overflow-hidden",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {imageChildren ? (
          <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md border border-solid border-border-secondary">
            {imageChildren}
          </div>
        ) : null}
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <span
                className={SubframeCore.twClassNames(
                  "text-caption-bold font-caption-bold text-brand-700",
                  { hidden: tag === "code" || tag === "design" }
                )}
              >
                ANNOUNCEMENT
              </span>
              <span
                className={SubframeCore.twClassNames(
                  "hidden text-caption-bold font-caption-bold text-error-700",
                  { hidden: tag === "code", inline: tag === "design" }
                )}
              >
                DESIGN
              </span>
              <span
                className={SubframeCore.twClassNames(
                  "hidden text-caption-bold font-caption-bold text-success-700",
                  { inline: tag === "code", hidden: tag === "design" }
                )}
              >
                CODE
              </span>
            </div>
            {title ? (
              <span className="line-clamp-2 w-full text-heading-3 font-heading-3 text-default-font">
                {title}
              </span>
            ) : null}
          </div>
          <div className="flex w-full items-end gap-2">
            <Avatar size="x-small" image={authorImage}>
              JD
            </Avatar>
            <div className="flex items-end gap-1">
              {author ? (
                <span className="text-body font-body text-default-font">
                  {author}
                </span>
              ) : null}
              <span className="text-body font-body text-subtext-color">•</span>
              {publishedDate ? (
                <span className="text-body font-body text-subtext-color">
                  {publishedDate}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const BlogPostCard = BlogPostCardRoot;
