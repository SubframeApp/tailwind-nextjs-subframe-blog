"use client";
/*
 * Documentation:
 * Hero Banner — https://app.subframe.com/3b0b4e9f8fe8/library?component=Hero+Banner_97ddb6e3-4a4e-4aa9-af8d-2074725c7dec
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ButtonBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  iconRight?: SubframeCore.IconName;
  variant?: "default" | "secondary" | "variation";
  className?: string;
}

const ButtonBadge = React.forwardRef<HTMLElement, ButtonBadgeProps>(
  function ButtonBadge(
    {
      icon = null,
      text,
      iconRight = "FeatherArrowRight",
      variant = "default",
      className,
      ...otherProps
    }: ButtonBadgeProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/54870711 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-100 pr-4 pl-4 hover:bg-neutral-50",
          {
            "bg-neutral-800 hover:bg-neutral-700": variant === "variation",
            "bg-transparent hover:bg-brand-700": variant === "secondary",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[16px] font-[600] leading-[16px] text-default-font",
            { "text-white": variant === "variation" || variant === "secondary" }
          )}
          name={icon}
        />
        {text ? (
          <span
            className={SubframeCore.twClassNames(
              "whitespace-nowrap text-[18px] font-[500] leading-[28px] text-default-font",
              {
                "text-white":
                  variant === "variation" || variant === "secondary",
              }
            )}
          >
            {text}
          </span>
        ) : null}
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[16px] font-[600] leading-[16px] text-default-font",
            { "text-white": variant === "variation" || variant === "secondary" }
          )}
          name={iconRight}
        />
      </div>
    );
  }
);

interface HeroBannerRootProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "default" | "variation";
  className?: string;
}

const HeroBannerRoot = React.forwardRef<HTMLElement, HeroBannerRootProps>(
  function HeroBannerRoot(
    {
      title,
      subtitle,
      children,
      variant = "default",
      className,
      ...otherProps
    }: HeroBannerRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/97ddb6e3 flex w-full items-start gap-16 rounded-xl bg-neutral-800 pt-16 pr-12 pb-12 pl-12",
          { "bg-neutral-100": variant === "variation" },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex max-w-[768px] grow shrink-0 basis-0 flex-col items-start justify-center gap-4">
          {title ? (
            <span
              className={SubframeCore.twClassNames(
                "w-full whitespace-pre-wrap text-[36px] font-[600] leading-[40px] text-white -tracking-[.025em]",
                { "text-default-font": variant === "variation" }
              )}
            >
              {title}
            </span>
          ) : null}
          {subtitle ? (
            <span className="w-full whitespace-pre-wrap text-[36px] font-[500] leading-[40px] text-neutral-400 -tracking-[.035em]">
              {subtitle}
            </span>
          ) : null}
          {children ? (
            <div className="flex w-full flex-wrap items-start gap-4 pt-8">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const HeroBanner = Object.assign(HeroBannerRoot, {
  ButtonBadge,
});
