"use client";

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { div } from "framer-motion/client";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

type ReviewColumnProps = {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
};

type ReviewProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
};

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];
  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
};

// CHILD COMPONENT
const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: ReviewColumnProps) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  console.log("reviews->",reviews)
  console.log("className->",className)
  console.log("reviewClassName->",reviewClassName)
  console.log("msPerPixel->",msPerPixel)

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

// CHILD COMPONENT
const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const columns = splitArray(PHONES, 3);
  const columnOne = columns[0];
  const columnTwo = columns[1];
  // const columnThree = columns[0]
  const columnThree = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 border border-black"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...columnOne, ...columnThree.flat(), ...columnTwo]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden":
                  reviewIndex >= columnOne.length + columnThree[0].length,
                "lg:hidden": reviewIndex >= columnOne.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columnTwo, ...columnThree[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columnTwo.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columnThree.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
    </div>
  );
};

// COMPONENT
const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="icon"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
