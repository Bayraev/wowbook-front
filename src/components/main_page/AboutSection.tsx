"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MicroIconLg from "@/assets/svg/layout/lg_about_micro.svg";
import MicroIconMd from "@/assets/svg/layout/md_about_micro.svg";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import NextBtn from "@/assets/svg/next-button.svg";
import AppsLeft from "@/assets/svg/apps-left.svg";
import Microchips from "@/assets/img/microchips.svg";
import Iphone from "@/assets/img/phone.svg";
import AppsRight from "@/assets/svg/apps-right.svg";
import AppStoreIcon from "@/assets/svg/layout/app_store.svg";
import PlayMarketIcon from "@/assets/svg/layout/play_market.svg";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Arrow } from "../ui/Arrow";
import { PaginationPoint } from "../ui/PaginationPoint";
import Ligh from "@/assets/svg/light.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface NewsProps {
  dict: Record<string, any>;
  app_links: {
    app_link_ios: string;
    app_link_android: string;
  };
}
export default function About({ dict, app_links }: NewsProps) {
  const swiperRef = useRef<null | { swiper: any }>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const isXl = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      setSlideCount(swiperInstance.slides.length);
      swiperInstance.on("slideChange", () => {
        setActiveIndex(swiperInstance.activeIndex);
      });
    }
  }, [isXl]);

  const handlePrev = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.activeIndex === 0) {
        swiperInstance.slideTo(slideCount - 1);
      } else {
        swiperInstance.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.activeIndex === slideCount - 1) {
        swiperInstance.slideTo(0);
      } else {
        swiperInstance.slideNext();
      }
    }
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto px-2.5 md:px-10 lg:px-10 2xl:px-5 mt-[30px]">
      <Button
        text={dict.About.detailBtn}
        icon={<Image src={NextBtn} alt="next" className="h-5" />}
      />

      <div className="flex justify-between gap-11 mt-[30px]">
        {/* Left Banner */}
        <div className="relative w-full 2xl:max-w-[59.625rem]">
          <div className="size-full relative z-0 rounded-28 overflow-visible bg-gradient__2 border-2 border-[#271822] box-shadow1">
            {/* Custom Overlay Border */}
            <div className="size-full relative rounded-28 border-2 border-[#634357] p-4 md:px-12">
              <div className="w-full lg:max-w-[30.5rem]">
                <Swiper
                  ref={swiperRef}
                  cssMode={false}
                  mousewheel={true}
                  modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper !size-full !overflow-hidden"
                >
                  {/* Slayderlar */}
                  <SwiperSlide>
                    <div className="relative z-10 flex justify-center items-center gap-2 sm:gap-5">
                      <Image
                        src={AppsLeft}
                        alt="apps-left"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                      <h2 className="font-copperplate text-xl sm:text-2xl md:text-[32px] text-[#FFD5CD]">
                        {dict.About.sliderTitle}
                      </h2>
                      <Image
                        src={AppsRight}
                        alt="app-right"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                    </div>
                    <div>
                      <h4 className="text-center font-semibold text-sm text-[#FFD5CD] mt-2.5">
                        {dict.About.slide1Title}
                      </h4>
                      <p className="text-sm mt-2.5 __line-clamp-3 xl:line-clamp-none">
                        {dict.About.slide1Desc}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative z-10 flex justify-center items-center gap-2 sm:gap-5">
                      <Image
                        src={AppsLeft}
                        alt="apps-left"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                      <h2 className="font-copperplate text-xl sm:text-2xl md:text-[32px] text-[#FFD5CD]">
                        {dict.About.sliderTitle}
                      </h2>
                      <Image
                        src={AppsRight}
                        alt="app-right"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                    </div>
                    <div>
                      <h4 className="text-center font-semibold text-sm text-[#FFD5CD] mt-2.5">
                        {dict.About.slide1Title}
                      </h4>
                      <p className="text-sm mt-2.5 __line-clamp-3 xl:line-clamp-none">
                        {dict.About.slide1Desc}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative z-10 flex justify-center items-center gap-2 sm:gap-5">
                      <Image
                        src={AppsLeft}
                        alt="apps-left"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                      <h2 className="font-copperplate text-xl sm:text-2xl md:text-[32px] text-[#FFD5CD]">
                        {dict.About.sliderTitle}
                      </h2>
                      <Image
                        src={AppsRight}
                        alt="app-right"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                    </div>
                    <div>
                      <h4 className="text-center font-semibold text-sm text-[#FFD5CD] mt-2.5">
                        {dict.About.slide1Title}
                      </h4>
                      <p className="text-sm mt-2.5 __line-clamp-3 xl:line-clamp-none">
                        {dict.About.slide1Desc}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative z-10 flex justify-center items-center gap-2 sm:gap-5">
                      <Image
                        src={AppsLeft}
                        alt="apps-left"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                      <h2 className="font-copperplate text-xl sm:text-2xl md:text-[32px] text-[#FFD5CD]">
                        {dict.About.sliderTitle}
                      </h2>
                      <Image
                        src={AppsRight}
                        alt="app-right"
                        className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                      />
                    </div>
                    <div>
                      <h4 className="text-center font-semibold text-sm text-[#FFD5CD] mt-2.5">
                        {dict.About.slide1Title}
                      </h4>
                      <p className="text-sm mt-2.5 __line-clamp-3 xl:line-clamp-none">
                        {dict.About.slide1Desc}
                      </p>
                    </div>
                  </SwiperSlide>
                  {!isXl && (
                    <SwiperSlide>
                      <div className="relative z-10 flex justify-center items-center gap-2 sm:gap-5">
                        <Image
                          src={AppsLeft}
                          alt="apps-left"
                          className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                        />
                        <h2 className="font-copperplate text-xl sm:text-2xl md:text-[32px] text-[#FFD5CD]">
                          {dict.About.download} WoW Books
                        </h2>
                        <Image
                          src={AppsRight}
                          alt="app-right"
                          className="w-7 h-[2.8px] sm:w-12 sm:h-1.5"
                        />
                      </div>
                      <div>
                        <h4 className="text-center font-semibold text-sm text-[#FFD5CD] mt-2.5">
                          {dict.About.downloadSlideTitle}
                        </h4>
                        <p className="text-center text-sm mt-2.5 __line-clamp-3 xl:line-clamp-none">
                          {dict.About.downloadSlideDesc}
                        </p>
                      </div>
                      <div className="mt-5 allow-select flex justify-center items-center gap-3 relative overflow lg:ml-[-80px]">
                        <Image
                          width={138}
                          alt="micro-icon"
                          src={MicroIconMd}
                          className="hidden sm:block flex-shrink-0"
                        />
                        <a
                          href={app_links.app_link_android}
                          target="_blank"
                          className="flex-1 sm:min-w-[187px] max-w-[187px]"
                        >
                          <Image
                            width={187}
                            alt="play_market-icon"
                            src={PlayMarketIcon}
                          />
                        </a>
                        <a
                          href={app_links.app_link_ios}
                          target="_blank"
                          className="flex-1 sm:min-w-[187px] max-w-[187px]"
                        >
                          <Image
                            width={187}
                            alt="app_store-icon"
                            src={AppStoreIcon}
                          />
                        </a>
                        <Image
                          width={138}
                          alt="micro-icon"
                          src={MicroIconMd}
                          className="hidden sm:block flex-shrink-0 rotate-180"
                        />
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
                {/* Custom Pagination */}
                <div className="relative z-10 flex gap-1 mx-auto w-max mt-3">
                  {[...Array(slideCount)].map((_, index) => (
                    <PaginationPoint
                      key={index}
                      onClick={() => handlePaginationClick(index)}
                      is_active={activeIndex === index}
                    />
                  ))}
                </div>
              </div>
              <Image
                src={Iphone}
                alt="iphone"
                className="hidden lg:block absolute right-[14%] top-1/2 -translate-y-1/2 z-0 bottom-0 mask-opacity-gradient"
              />
              <Image
                src={Microchips}
                alt="apps-left"
                className="hidden lg:block h-full absolute right-0 top-0"
              />
            </div>
          </div>
          {/* Custom Next & Prev Buttons */}
          <div className="">
            <div className="absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2  hidden md:block size-12 items-center justify-center rounded-full">
              <Arrow onClick={handlePrev} direction="left" />
            </div>
            <div className="absolute z-20 top-1/2 -translate-y-1/2 right-0 translate-x-1/2 hidden md:block size-12 items-center justify-center rounded-full">
              <Arrow onClick={handleNext} direction="right" />
            </div>
          </div>
        </div>
        {/* Right Banner */}
        <div className="block-select relative hidden 2xl:block max-w-[17.5rem] w-full aspect-square overflow-hidden rounded-28 border-2 border-[#271822] box-shadow1">
          <div className="h-full flex flex-col items-center justify-center gap-5 relative bg-[radial-gradient(87.29%_100%_at_50%_0%,_rgba(83,_50,_71,_0.5)_0%,_rgba(36,_19,_31,_0.5)_100%)] shadow-[0px_4px_16.4px_rgba(0,_0,_0,_0.31)] backdrop-blur-[1.75px] rounded-[28px]">
            <h3 className="font-copperplate text-[36px] leading-[104%] tracking-[-0.04em] text-[#FFD5CD] text-center">
              {dict.About.download}
              <br />
              WoW Books
            </h3>

            <div className="allow-select flex flex-col gap-3">
              <a href={app_links.app_link_android} target="_blank">
                <Image
                  width={187}
                  alt="play_market-icon"
                  src={PlayMarketIcon}
                  className=""
                />
              </a>
              <a href={app_links.app_link_ios} target="_blank">
                <Image
                  width={187}
                  alt="app_store-icon"
                  src={AppStoreIcon}
                  className=""
                />
              </a>
            </div>
            <Image
              width={30}
              alt="micro-icon"
              src={MicroIconLg}
              className="absolute top-1/2 -translate-y-[10%] left-0"
            />
            <Image
              width={30}
              alt="micro-icon"
              src={MicroIconLg}
              className="absolute top-1/2 -translate-y-[10%] right-0 rotate-180"
            />
          </div>
          <Image
            src={Ligh}
            width={257}
            height={312}
            alt="light"
            className="absolute left-0 top-1/2 translate-y-[15%] w-full -z-10"
          />
          <div className="w-[278px] h-[278px] rounded-28"></div>
          <div className=" absolute top-0 left-0 size-full rounded-28 border-2 border-[#63435799]"></div>
        </div>
      </div>
    </section>
  );
}
