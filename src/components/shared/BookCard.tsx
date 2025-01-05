import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export interface IBookCardProps {
  name: string;
  author: string;
  image: string;
  className?: string;
}

export function BookCard({ name, author, image, className }: IBookCardProps) {
  return (
    <div className={cn("cursor-pointer min-w-[114px] w-[114px] md:min-w-[125px] md:w-[125px] lg:min-w-[160px] lg:w-[160px]", className)}>
      <div className="relative w-full h-[158px] md:h-[172px] lg:h-[220px] overflow-hidden rounded-xl border-2 border-[#271822]">
        <Image
          height={220}
          width={160}
          src={image}
          alt={name}
          className="size-full object-cover"
        />
        <div className="absolute top-0 left-0 size-full rounded-xl border-2 border-[#63435799]"></div>
      </div>
      <div className="flex flex-col items-start p-[5px] font-monserrat text-white gap-2 mt-[3px]">
        <p className="text-[14px] leading-[17px] md:text-[12px] md:leading-[15px] lg:text-[14px] lg:leading-[17px] font-light line-clamp-1">
          {author}
        </p>
        <h4 className="text-[14px] leading-[15px] md:text-[12px] md:leading-[13px] lg:text-[14px] lg:leading-[15px] font-semibold line-clamp-2">
          {name}
        </h4>
      </div>
    </div>
  );
}
