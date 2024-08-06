import * as SubframeCore from "@subframe/core";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import React, { isValidElement } from "react";
import { highlight } from "sugar-high";
import styles from "./blog-mdx-renderer.module.scss";
import { CopyToClipboardButton } from "../subframe/components/CopyToClipboardButton";
import { twClassNames } from "@subframe/core";
import subframeCollaborationImage from "../blog-images/subframe-collaboration.png";
import chkkTweetImage from "../blog-images/chkk-tweet.png";

/**
 * Image
 */
function BaseImage({
  className,
  src,
  alt,
  ...otherProps
}: React.ComponentProps<typeof Image>) {
  switch (src) {
    case "/images/blog/subframe-collaboration.png":
      src = subframeCollaborationImage;
      break;
    case "/images/blog/chkk-tweet.png":
      src = chkkTweetImage;
      break;
  }

  return (
    <Image
      className={twClassNames("m-0", className)}
      alt={alt}
      src={src}
      quality={100}
      {...otherProps}
    />
  );
}

function NextImage({
  className,
  src,
  alt,
  ...otherProps
}: React.ComponentProps<typeof Image>) {
  return (
    <CustomImage src={src} alt={alt} className={className} {...otherProps} />
  );
}

/**
 * Custom Image
 */
interface CustomImageProps extends React.ComponentProps<typeof Image> {
  variant?: "default" | "no-styling";
  size?: "full-width" | "smaller";
}
function CustomImage({
  className,
  src,
  alt = "",
  variant = "default",
  size = "full-width",
  ...otherProps
}: CustomImageProps) {
  return (
    <span
      className={twClassNames(
        "inline-flex flex-col items-center my-6 w-full",
        className,
        {
          "gap-3": variant === "no-styling", // no-styling means needs more visual separation
          "gap-2": variant === "default",
        }
      )}
    >
      <span
        className={twClassNames(
          "inline-flex items-center justify-center w-full",
          {
            "min-h-[120px]": size === "full-width",
            "bg-white rounded-xl border border-[#f5f5f5] overflow-hidden":
              variant === "default",
          }
        )}
      >
        <BaseImage
          className={twClassNames({
            "w-1/2": size === "smaller",
          })}
          alt={alt}
          src={src}
          {...otherProps}
        />
      </span>
      {alt && <span className="px-4 text-body text-subtext-color">{alt}</span>}
    </span>
  );
}

/**
 * Link
 */
function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  let href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

/**
 * Code
 */
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
}

function Code({ children, className, ...otherProps }: CodeProps) {
  const codeEl = React.Children.only(children);
  if (isValidElement(codeEl)) {
    const code = (codeEl.props as any).children as string;
    let codeHTML = highlight(code);
    return (
      <pre className={styles.code}>
        <CopyToClipboardButton
          className={styles.copyToCode}
          clipboardText={code}
        />
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...otherProps} />
      </pre>
    );
  }
  return children;
}

/**
 * Headers
 */
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

interface HeaderProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: string;
}

function createHeading(level: "h1" | "h2" | "h3"): React.FC<HeaderProps> {
  // eslint-disable-next-line react/display-name
  return ({ children, className, ...otherProps }) => {
    let slug = slugify(children);

    let headerChildren: React.ReactNode;
    switch (level) {
      case "h1":
        headerChildren = (
          <h1 className="scroll-mt-24" id={slug}>
            {children}
          </h1>
        );
        break;
      case "h2":
        headerChildren = (
          <h2 className="scroll-mt-24" id={slug}>
            {children}
          </h2>
        );
        break;
      case "h3":
        headerChildren = (
          <h3 className="scroll-mt-24" id={slug}>
            {children}
          </h3>
        );
        break;
    }

    return (
      <a
        className={twClassNames(
          "relative no-underline cursor-pointer group",
          className
        )}
        href={`#${slug}`}
        {...otherProps}
      >
        <SubframeCore.Icon
          className="text-lg absolute mt-1.5 left-[-24px] invisible group-hover:visible"
          name="FeatherLink"
        />
        {headerChildren}
      </a>
    );
  };
}

const DEFAULT_COMPONENTS = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  a: CustomLink,
  pre: Code,
  img: NextImage,
  Image: CustomImage,
} as any;

export function MDXBlogRenderer({
  components,
  ...otherProps
}: React.ComponentProps<typeof MDXRemote>) {
  return (
    <MDXRemote
      {...otherProps}
      components={{ ...DEFAULT_COMPONENTS, ...components }}
    />
  );
}
