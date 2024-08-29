## Overview
A lightweight, SEO-optimized, self-hosted blog built with Subframe with the following:
* Subframe's [Blog home template](https://www.subframe.com/templates/blog-home)
* Next.js 14 / Tailwind CSS [starter kit](https://github.com/SubframeApp/subframe-nextjs-starter-kit)
* MDX (via next-mdx-remote)

This template is perfect for kickstarting your own self-hosted blog and fully extensible with custom components.

## Running the project

First, install dependencies:

```bash
npm install
```

And then run the project:

```bash
npm run dev
```

## Understanding the file structure

Here's the file structure of this project:
```
├── public
│   ├── images
│   │   ├── blog-posts
├── src
│   ├── app
│   ├── blog-posts
│   ├── components
│   ├── helpers
│   ├── subframe
```

And how to use each directory:
* `public/images/blog-posts`: add any blog-specific images here
* `src/app`: the Next 14 app router where you can define any non-blog related pages
* `src/blog-posts`: where the actual blog posts live via .mdx files
* `src/components`: any blog-related components, such as a footer with a custom CTA
* `src/helpers`: any helper files
* `src/subframe`: a pre-built Tailwind + Radix design system from [Subframe](https://www.subframe.com/library)

## Publish a new post
Create a new blog post by adding a .mdx file to `src/blog-posts`. The project will automatically turn any `.mdx` files into a new route. Any blog post images should go in the `public/images/blog` folder

To specify metadata like title and author, you will need to add in front matter data at the top of the .mdx file in the following format:

```mdx
---
title: "Introducing Subframe"
description: "Why we are launching and where we're going"
date: "2024-04-22"
author: "Subframe"
authorImage: "/images/subframe-logo.png"
image: "/images/social-media.png"
tag: "announcement"
---

## Rest of the blog post...
```

