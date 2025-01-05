import getDictionary from '@/i18n/getDictionary';
import React from 'react';
import toIcon from '@/assets/svg/to-icon.svg';
import Infocard from '../ui/Infocard';
import metamaskIcon from '@/assets/svg/metamask-icon.svg';
import leetcoinIcon from '@/assets/svg/leetcoin.svg';
import udstIcon from '@/assets/svg/usdt-icon.svg';
import infocardImage from '@/assets/svg/id-card-idcard.svg';
import { Button } from '../ui/Button';
import { ExitIcon } from '../ui/Icons';

export default async function Infocards({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const FragmentRowOne = () => (
    <div className="flex    mb-[30px]">
      {/* row */}
      <Infocard
        backgroundImage={toIcon}
        lang={`${params.lang}`}
        title="Email:"
        description="somebody@wow.com"
        className="mr-[36px]"
        textStyle="text-center block w-[1000px] text-[16px]"
        buttonType="edit"
      />

      <Infocard
        backgroundImage={infocardImage}
        lang={`${params.lang}`}
        title="Ваше имя:"
        description="Виктор Корнеплод"
        className="mr-[36px]"
        textStyle="text-center block w-[1000px] text-[16px]"
        buttonType="edit"
      />

      <Infocard
        backgroundImage={metamaskIcon}
        lang={`${params.lang}`}
        title="Metamask"
        description="flex"
        className="mr-[36px]"
        textStyle="text-center block w-[1000px] text-[16px]"
        buttonType="link"
      />
    </div>
  );

  const FragmentRowTwo = () => (
    <div className="flex justify-center w-[527px]">
      {/* row */}
      <Infocard
        backgroundImage={leetcoinIcon}
        lang={`${params.lang}`}
        title={`${dict.Profile.leetcoin}`}
        description="flex"
        className="mr-[36px]"
        textStyle="text-center block w-[1000px] text-[16px] "
        buttonType="exchange"
      />

      <Infocard
        backgroundImage={udstIcon}
        lang={`${params.lang}`}
        title={`${dict.Profile.usdt}`}
        description="0"
        textStyle="text-center flex text-[24.6px]"
        buttonType="exchange"
      />
    </div>
  );

  return (
    <div className=" flex justify-center w-full    ">
      <div className="w-[825px] h-[354px] ">
        <FragmentRowOne />

        <div className="relative flex justify-center">
          <FragmentRowTwo />

          <span className="absolute right-0  flex flex-row justify-center items-center px-[1px] py-[13px] gap-[13px] w-[132px] h-[48px] group bg-[#271220] border-[2px] border-[#513748] rounded-[35px] hover:border-[#614c58] hover:shadow-lg active:border-[#3d2a36]">
            <Button
              icon={<ExitIcon />}
              textClassName="hidden xl:block"
              // className="h-[20px]"
              contentClassName="border-0 h-[38px]"
              text={null}
              variant="tablet"
            />

            <span className="mr-[16px] block bg-gradient-to-r from-[rgb(231,181,214)] to-[rgb(255,198,236)] bg-clip-text text-transparent  text-outline">
              {dict.Profile.quit}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
