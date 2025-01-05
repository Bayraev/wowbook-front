"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";

import LocalSwitcher from "./LocaleSwitcher";
import { Button } from "../ui/Button";

// import Logo from "@/assets/svg/layout/logo_default.svg";
// import LogoHover from "@/assets/svg/layout/logo_hover.svg";
import Logo from "@/assets/img/layout/logo_default.png";
import LogoHover from "@/assets/img/layout/logo_hover.png";
import LogoCenterEn from "@/assets/img/layout/english_header.png";
import LogoCenterRu from "@/assets/img/layout/russian_header.png";

import {
  ProfileIcon,
  // ProfileLoginedIcon,
  BurgerIcon,
  StarIcon,
  FireIcon,
  BookIcon,
} from "../ui/Icons";

export default function Header({
  lang,
  dict,
}: {
  lang: string;
  dict: Record<string, any>;
}) {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-base-2 mx-auto px-five md:px-3.5 lg:px-5 xl:px-10 2xl:px-3 3xl:px-12">
      <div className="border-2 border-t-0 border-black backdrop-blur-[2px] bg-gradient rounded-l-28 rounded-r-28 !rounded-t-none">
        <div className="border-2 border-t-0 border-[#634357] rounded-28 rounded-t-none">
          <nav className="relative bg-gradient rounded-l-28 rounded-r-28 !rounded-t-none flex flex-col">
            <div className="flex items-center justify-between gap-7 md:gap-4 px-7 xl:px-[68px] py-3.5">
              <Button
                icon={<ProfileIcon />}
                text={null}
                containerClassName="md:hidden"
                variant="tablet"
              />

              <Link href="/" className="relative w-40 h-14">
                <Image
                  src={Logo}
                  alt="Logo-icon"
                  className="absolute top-0 right-0 w-40 h-14 transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <Image
                  src={LogoHover}
                  alt="Logo-icon-hover"
                  className="absolute top-0 right-0 w-40 h-14 transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </Link>

              <Image
                src={lang === "ru" ? LogoCenterRu : LogoCenterEn}
                alt="logo-center"
                className="hidden md:block max-w-[26.8125rem] lg:max-w-[34rem] w-full"
              />
              <div className="hidden xl:flex gap-15">
                <LocalSwitcher />
                <Button
                  icon={<ProfileIcon />}
                  text={null}
                  containerClassName="hidden xl:block"
                  variant="tablet"
                />
              </div>
              {/* Mobile */}
              <Button
                icon={<BurgerIcon />}
                text={null}
                containerClassName="xl:hidden"
                variant="tablet"
                onClick={() => setOpenDetails(!openDetails)}
              />
            </div>
            {/* Mobile Buttons */}
            <div
              className={cn(
                "xl:hidden max-h-0 overflow-hidden transition-all duration-300 z-[1] w-full flex flex-col items-center justify-center gap-[15px]",
                openDetails
                  ? "max-h-[271px] md:max-h-[145px] my-[19px] md:mt-[15px]"
                  : ""
              )}
            >
              <div className="flex justify-center items-center gap-3 flex-col md:flex-row">
                <Button
                  icon={<StarIcon />}
                  text={dict.Navigation.newItems}
                  variant="tablet"
                />
                <Button
                  icon={<FireIcon />}
                  text={dict.Navigation.popular}
                  variant="tablet"
                />
                <Button
                  icon={<BookIcon />}
                  text={dict.Navigation.literaryWorlds}
                  variant="tablet"
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Button
                  text={dict.Navigation.loginAcount}
                  containerClassName="hidden md:flex"
                  icon={<ProfileIcon />}
                  variant="tablet"
                />
                <LocalSwitcher />
              </div>
              {/* <Link href="/new">{dict.Navigation.newItems}</Link>
                <Link href="/popular">{dict.Navigation.popular}</Link>
                <Link href="/literary-worlds">
                  {dict.Navigation.literaryWorlds}
                </Link>
                <Link href="/login">{dict.Navigation.loginAcount}</Link> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
