import TranslateIconDefault from "@/assets/svg/icon/translate.svg";
import TranslateIconHover from "@/assets/svg/icon/hover/translate_hover.svg";
import Image from "next/image";

export function TranslateIcon() {
  return (
    <>
      <Image
        src={TranslateIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[22px] h-[23px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={TranslateIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[22px] h-[23px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
