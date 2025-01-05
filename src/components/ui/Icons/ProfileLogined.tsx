import ProfileLoginedIconDefault from "@/assets/svg/icon/profile_logined.svg";
import ProfileLoginedIconHover from "@/assets/svg/icon/hover/profile_logined_hover.svg";
import Image from "next/image";

export function ProfileLoginedIcon() {
  return (
    <>
      <Image
        src={ProfileLoginedIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[21.3px] h-[22.8px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={ProfileLoginedIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[21.3px] h-[22.8px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
