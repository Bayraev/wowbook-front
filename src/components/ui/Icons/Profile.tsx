import ProfileIconDefault from "@/assets/svg/icon/profile.svg";
import ProfileIconHover from "@/assets/svg/icon/hover/profile_hover.svg";
import Image from "next/image";

export function ProfileIcon() {
  return (
    <>
      <Image
        src={ProfileIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[22px] h-[22px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={ProfileIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[22px] h-[22px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
