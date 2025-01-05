"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Arrow } from "../ui/Arrow";

export interface IBannerSliderProps {
  slides: React.ReactNode[];
}

export function BannerSlider({ slides }: IBannerSliderProps) {
  const swiperRef = useRef<null | { swiper: any }>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.on("slideChange", () => {
        setActiveIndex(swiperInstance.activeIndex);
      });
    }
  }, [slides]);

  const handlePrev = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.activeIndex === 0) {
        swiperInstance.slideTo(slides.length - 1);
      } else {
        swiperInstance.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.activeIndex === slides.length - 1) {
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
    <div>
      {/* Left Banner */}
      <div className="relative w-full 2xl:max-w-[59.625rem] h-[180px] sm:h-[278px]">
        <div className="size-full relative z-0 overflow-hidden rounded-28 border-2 border-[#271822] bg-[radial-gradient(89.02%_100%_at_48.6%_0.14%,_rgba(83,_50,_71,_0.5)_0%,_rgba(36,_19,_31,_0.5)_100%)] shadow-[0px_4px_16.4px_rgba(0,_0,_0,_0.31)] backdrop-blur-[3px]">
          <div className="size-full rounded-28 border-2 border-[#634357]">
            <Swiper
              ref={swiperRef}
              cssMode={false}
              touchAngle={0}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mySwiper !size-full !rounded-[26px] !overflow-hidden"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="!w-full !h-full">
                  {slide}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Custom Next & Prev Buttons */}
        <div className="">
          <div className="absolute z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block size-12 items-center justify-center rounded-full">
            <Arrow onClick={handlePrev} direction="left" />
          </div>
          <div className="absolute z-20 top-1/2 -translate-y-1/2 right-0 translate-x-1/2 hidden md:block size-12 items-center justify-center rounded-full">
            <Arrow onClick={handleNext} direction="right" />
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="relative z-10 flex gap-1 mx-auto w-max -mt-5">
          {[...Array(slides.length)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`size-2.5 rounded-full ${
                activeIndex === index ? "bg-[#FBDBF0]" : "bg-[#69425C]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

// /* Frame */

// width: 954px;
// height: 278px;

// background: radial-gradient(89.02% 100% at 48.6% 0.14%, rgba(83, 50, 71, 0.5) 0%, rgba(36, 19, 31, 0.5) 100%);
// box-shadow: 0px 4px 16.4px rgba(0, 0, 0, 0.31);
// backdrop-filter: blur(3px);
// /* Note: backdrop-filter has minimal browser support */

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
// margin: -281px 0px;
// z-index: 0;
