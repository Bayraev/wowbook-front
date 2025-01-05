import { TestButton } from "../ui/TestButton";
// import { TestButtonHover } from "../ui/TestButtonHover";
// import { TestButtonActive } from "../ui/TestButtonActive";
import { Button } from "../ui/Button";
import NextBtn from "@/assets/svg/icon/profile.svg";
import Image from "next/image";
import { Link } from "../ui/Link";

export function DevCanvas() {
  return (
    <div className="mb-10 w-[400px] h-[400px] bg-gradient flex flex-col items-center justify-center gap-5">
      <TestButton />
      <Button
        variant="tablet"
        icon={<Image src={NextBtn} alt="icon" />}
        text={null}
      />
      <Button
        variant="tablet"
        icon={<Image src={NextBtn} alt="icon" />}
        text="Button"
      />
      {/* <TestButtonHover /> */}
      {/* <TestButtonActive /> */}
      <Link href="/">Публичная оферта</Link>
    </div>
  );
}
