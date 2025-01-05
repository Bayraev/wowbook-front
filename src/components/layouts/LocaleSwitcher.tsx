"use client";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/i18n-config";
import { Fragment } from "react";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const activeLang = pathname.split("/")[1];

  const onTabClick = (locale: Locale) => {
    if (activeLang !== locale) {
      window.location.href = redirectedPathname(locale);
    }
  };

  return (
    // <div className="flex justify-center gap-8 underline">
    <div className="flex items-center -space-x-2.5">
      {i18n.locales.map((locale, i) => {
        return (
          <Fragment key={locale}>
            {/* <div key={locale}>
              <Link href={redirectedPathname(locale)}>{locale}</Link>
            </div> */}

            <div className="bg-dark p-five rounded-full group">
              <button
                className={`rounded-full font-semibold uppercase text-base/[1.2188rem] px-4 py-nine bg-secondary ${
                  activeLang === locale ? "" : "bg-transparent"
                }`}
                onClick={() => onTabClick(locale)}
                disabled={activeLang === locale}
              >
                <span
                  className={`${
                    activeLang === locale
                      ? "bg-gradient-to-t from-[#F1C4E2] to-[#AF809F] bg-clip-text text-transparent"
                      : "transition-colors duration-300 bg-gradient-to-br from-[#917588] to-[#5D3E53] bg-clip-text text-transparent group-hover:from-[#F1C4E2] group-hover:to-[#AF809F]"
                  }`}
                >
                  {locale}
                </span>
              </button>
            </div>

            {i < i18n.locales.length - 1 ? (
              <div>
                <svg
                  width="25"
                  height="38"
                  viewBox="0 0 25 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.103054 0.927301C4.34269 5.76772 6.91184 12.1053 6.91184 19.0422C6.91184 25.9792 4.34268 32.3168 0.103027 37.1572C3.29697 33.7292 7.40609 30.9616 12.0811 30.9616C16.7563 30.9616 20.8655 33.7293 24.0594 37.1575C19.8197 32.317 17.2504 25.9794 17.2504 19.0422C17.2504 12.1052 19.8196 5.76756 24.0594 0.927124C20.8654 4.35525 16.7562 7.12294 12.0811 7.12294C7.4061 7.12294 3.29699 4.35535 0.103054 0.927301Z"
                    fill="#271220"
                  />
                </svg>
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
