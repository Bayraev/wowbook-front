import ExitIconDefault from "@/assets/svg/icon/exit.svg";
import ExitIconHover from "@/assets/svg/icon/hover/exit_hover.svg";
import Image from "next/image";

export function ExitIcon() {
  return (
    <>
      <Image
        src={ExitIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[18px] h-[18px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={ExitIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[18px] h-[18px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
