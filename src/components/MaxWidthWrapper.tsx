import { cn } from "@/lib/utils";
import React from "react";

export type TClassName = {
  className?: string;
};

export type TChildren = {
  children: React.ReactNode;
};

type TMaxWidthWrapperProp = TClassName & TChildren;

const MaxWidthWrapper = ({ className, children }: TMaxWidthWrapperProp) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
