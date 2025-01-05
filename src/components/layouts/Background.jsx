import BackgrounTop from "@/assets/svg/background-top.svg";
import BackgrounBottom from "@/assets/svg/background-bottom.svg";
import BackgrounLeft from "@/assets/svg/background-left.svg";
import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute z-0 size-full top-0 overflow-x-hidden">
      <div className="relative overflow-hidden top-0 w-full min-h-full h-full">
        <Image
          src={BackgrounTop}
          alt="background-top"
          className="min-w-[109.5rem] object-center h-[50.9375rem] absolute left-1/2 -translate-x-1/2"
        />
        <Image
          src={BackgrounLeft}
          alt="background-left"
          className="hidden min-h-[109.5rem] w-[50.9375rem] absolute top-1/2 -translate-y-1/2 left-0"
        />
        <Image
          src={BackgrounLeft}
          alt="background-left"
          className="hidden min-h-[109.5rem] w-[50.9375rem] absolute top-1/2 -translate-y-1/2 right-0 rotate-180"
        />
        <Image
          src={BackgrounBottom}
          alt="background-bottom"
          className="min-w-[109.5rem] object-center h-[50.9375rem] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
}
