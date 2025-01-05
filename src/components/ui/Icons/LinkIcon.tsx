import linkIcon from '@/assets/svg/icon/link-icon.svg';
// import InfoIconHover from "@/assets/svg/icon/hover/info_hover.svg";
import Image from 'next/image';

export function LinkIcon() {
  return (
    <>
      <Image
        src={linkIcon}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[18px] h-[28px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={linkIcon}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[18px] h-[28px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
