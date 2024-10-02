import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 text-black">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:pb-52 lg:pt-24 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <img className="w-full" src="/snake-1.png" alt="snake_logo" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one </span>phone case.
                CaseCobra allows you to protectyour memories, not just your
                phone case.
              </p>

              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="text-green h-5 w-5 shrink-0" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="text-green h-5 w-5 shrink-0" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="text-green h-5 w-5 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                    src="/users/user-1.png"
                    alt="avatar_img"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                    src="/users/user-2.png"
                    alt="avatar_img"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                    src="/users/user-3.png"
                    alt="avatar_img"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                    src="/users/user-4.jpg"
                    alt="avatar_img"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-200"
                    src="/users/user-5.jpg"
                    alt="avatar_img"
                  />
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mt-32 flex w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
                src="/your-image.png"
                alt="your_image"
              />
              <img
                src="/line.png"
                className="absolute -bottom-6 -left-6 w-20 select-none"
                alt="line"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="absolute inset-x-0 -bottom-6 hidden text-green-600 sm:block" />
              </span>{" "}
              say
            </h2>
            <img
              src="/snake-2.png"
              className="order-0 w-24 lg:order-2"
              alt="cobra_image"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a complement on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple of weeks. Love it."
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/users/user-1.png"
                  alt="user_image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticable scratch on the corner,{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/users/user-4.jpg"
                  alt="user_image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
