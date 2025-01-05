import { cn } from "@/lib/utils";

export interface IPaginationPointProps {
  onClick: () => void;
  is_active: boolean;
}

export function PaginationPoint({ onClick, is_active }: IPaginationPointProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "size-2.5 rounded-full",
        is_active
          ? "bg-gradient-to-b from-[#FBDBF0] to-[#D4AAC6] mix-blend-plus-lighter opacity-70"
          : "bg-[#010000]"
      )}
    ></button>
  );
}
