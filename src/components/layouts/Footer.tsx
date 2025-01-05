import { Link as CustomLink } from "../ui/Link";
import getDictionary from "@/i18n/getDictionary";
import { Button } from "../ui/Button";
import { TelegramIcon, WebsiteIcon } from "../ui/Icons";

export default async function Footer({
  params,
  app_links,
}: {
  app_links: {
    agreement_link: string;
    privacy_link: string;
    tg_chat_link: string;
  };
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <footer className="max-w-base-2 mx-auto px-five md:px-3.5 lg:px-5 xl:px-10 2xl:px-3 3xl:px-12">
      <div className="border-2 border-b-0 border-black backdrop-blur-[2px] bg-gradient rounded-l-28 rounded-r-28 !rounded-b-none">
        <div className="bg-gradient border-2 border-b-0 border-[#331E2B]/80 rounded-l-28 rounded-t-28 !rounded-b-none overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-3 xss:px-[17px] sm:px-7 xl:px-[68px] py-3.5 xl:py-6">
            <div className="flex items-center gap-1 xss:gap-3 sm:gap-4 justify-between w-full md:w-auto">
              <a href={app_links.tg_chat_link} target="_blank" rel="noreferrer">
                <Button
                  icon={<TelegramIcon />}
                  textClassName="hidden xl:block"
                  text={dict.Footer.chat}
                  variant="tablet"
                />
              </a>

              <div className="block md:hidden min-w-[205.23px]">
                <div className="flex flex-col items-center justify-center gap-2 mb-3">
                  <CustomLink href={app_links.privacy_link}>
                    {dict.Footer.policy}
                  </CustomLink>
                  <div className="flex items-center justify-center gap-[10px]">
                    <CustomLink href={app_links.agreement_link}>
                      {dict.Footer.offer}
                    </CustomLink>
                    <span className="w-[6px] h-[16px] opacity-60 text-[16px] leading-[16px] text-[#BD89A9] font-monserrat">
                      •
                    </span>
                    <CustomLink href="mailto:admin@worldwords.io">
                      {dict.Footer.contacts}
                    </CustomLink>
                  </div>
                </div>
                <p className="font-medium text_shadow_footer text-center text-xs sm:text-base max-w-[160px] mx-auto">
                  {dict.Footer.center}
                </p>
              </div>

              <a href="https://worldwords.io" target="_blank" rel="noreferrer">
                <Button
                  icon={<WebsiteIcon />}
                  textClassName="hidden xl:block"
                  text={dict.Footer.chorme}
                  variant="tablet"
                />
              </a>
            </div>

            <p className="hidden md:block font-medium text_shadow_footer text-center max-w-[200px]">
              {dict.Footer.center}
            </p>

            <div className="hidden md:flex flex-col items-center justify-center gap-2">
              <CustomLink href={app_links.privacy_link}>
                {dict.Footer.policy}
              </CustomLink>
              <div className="flex items-center justify-center gap-[10px]">
                <CustomLink href={app_links.agreement_link}>
                  {dict.Footer.offer}
                </CustomLink>
                <span className="w-[6px] h-[16px] opacity-60 text-[16px] leading-[16px] text-[#BD89A9] font-monserrat">
                  •
                </span>
                <CustomLink href="mailto:admin@worldwords.io">
                  {dict.Footer.contacts}
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
