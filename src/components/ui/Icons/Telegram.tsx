import TelegramIconDefault from "@/assets/svg/icon/telegram.svg";
import TelegramIconHover from "@/assets/svg/icon/hover/telegram_hover.svg";
import Image from "next/image";

export function TelegramIcon() {
  return (
    <>
      <Image
        src={TelegramIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[24.4px] h-[22.84px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={TelegramIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[24.4px] h-[22.84px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
