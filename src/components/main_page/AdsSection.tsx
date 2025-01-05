"use client";

import Image from "next/image";
import { BannerSlider } from "../shared/BannerSlider";

interface BannerInfo {
  redirect_to: string;
  image_url: string;
}

function HeroSection({
  big_banners,
  small_banner,
}: {
  big_banners: BannerInfo[];
  small_banner: BannerInfo | null;
}) {
  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto flex justify-between gap-11 px-2.5 md:px-10 lg:px-10 2xl:px-5">
      <BannerSlider
        slides={big_banners.map((banner, index) => (
          <a
            key={index}
            href={banner.redirect_to}
            target="_blank"
            rel="noopener noreferrer"
            className="size-full block"
          >
            <Image
              width={954}
              height={278}
              src={banner.image_url}
              alt={`Banner ${index + 1}`}
              className="size-full object-cover"
            />
          </a>
        ))}
      />

      {/* Right Banner */}
      <div className="relative hidden 2xl:block max-w-[17.5rem] w-full aspect-square overflow-hidden rounded-28 border-2 border-[#271822] box-shadow1">
        {small_banner ? (
          <a
            href={small_banner.redirect_to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={278}
              height={278}
              src={small_banner.image_url}
              alt="RightImage"
              className="size-full object-cover rounded-28"
            />
          </a>
        ) : null}
        <div className="absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
      </div>
    </section>
  );
}

export default HeroSection;
