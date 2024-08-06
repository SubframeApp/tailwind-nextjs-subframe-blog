"use client";

import Link from "next/link";
import { HeroBanner } from "../subframe/components/HeroBanner";
import { twClassNames } from "@subframe/core";

export function BlogFooter({ className }: { className?: string }) {
  return (
    <HeroBanner
      className={twClassNames(className)}
      variant="variation"
      title="Join thousands of happy builders"
      subtitle="Subframe lets you build stunning UI with beautifully crafted components and a drag-and-drop visual editor."
    >
      <Link className="mobile:w-full" href="/">
        <HeroBanner.ButtonBadge
          variant="variation"
          className="mobile:w-full"
          text="Start for free"
        />
      </Link>
      <Link className="mobile:w-full" href="/">
        <HeroBanner.ButtonBadge
          variant="default"
          className="mobile:w-full"
          text="Learn more"
        />
      </Link>
    </HeroBanner>
  );
}
