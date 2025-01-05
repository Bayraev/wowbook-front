import BookIconDefault from "@/assets/svg/icon/book.svg";
import BookIconHover from "@/assets/svg/icon/hover/book_hover.svg";
import Image from "next/image";

export function BookIcon() {
  return (
    <>
      <Image
        src={BookIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[23px] h-[18px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={BookIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[23px] h-[18px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
