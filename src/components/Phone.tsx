import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import { TClassName } from "./MaxWidthWrapper";

type TPhoneProps = TClassName &
  HTMLAttributes<HTMLDivElement> & {
    imgSrc: string;
    dark?: boolean;
  };

const Phone = ({ imgSrc, dark = false, className, ...props }: TPhoneProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden rounded-[2.35rem]",
        className,
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "phone-template-white-edges.png"
        }
        alt="phone_image"
      />

      <div className="absolute inset-0 -z-50 ">
        <img
          className="object-cover border"
          src={imgSrc}
          alt="overlaying_phone_image"
        />
      </div>
    </div>
  );
};

export default Phone;
