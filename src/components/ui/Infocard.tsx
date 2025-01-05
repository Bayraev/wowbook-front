import React from 'react';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { PenIcon, WebsiteIcon } from './Icons';
import getDictionary from '@/i18n/getDictionary';
import { LinkIcon } from './Icons/LinkIcon';

type Props = {
  backgroundImage: string;
  title: string;
  description: string;
  className?: string;
  textStyle: string;
  buttonType: 'edit' | 'link' | 'exchange';
  lang: string;
};

export default async function Infocard({
  backgroundImage,
  title,
  description,
  textStyle = 'block',
  className,
  buttonType,
  lang,
}: Props) {
  const TextFragment = () => (
    <div className={`${textStyle} z-10  `}>
      <p className="block bg-gradient-to-r from-[rgb(231,181,214)] to-[rgb(255,198,236)] bg-clip-text text-transparent  text-outline ">
        {title}
      </p>
      <p className="block ">{description}</p>
    </div>
  );

  const dict = await getDictionary(lang);

  return (
    <div
      className={`${`${className}`} size-full relative z-0 w-[251px] h-[162px] rounded-28 overflow-visible bg-gradient__3 border-2 border-[#271822] `}>
      <div className="flex items-center justify-center box-border size-full relative rounded-28 border-2 border-[#634357] pb-[9px] px-[10px] overflow-hidden   ">
        {/* text section */}
        {/* <img src={buttonType === 'infocard' && infocard} /> */}
        <div className="w-[200px] h-[0px] absolute top-[0px] left-[0px] left-0 z-0">
          <Image src={backgroundImage as string} alt="/" width={160} />
        </div>
        <TextFragment />

        <div
          className={` border-box absolute bottom-[0px] left-0 flex justify-end w-full p-[2px]   ${buttonType === 'exchange' && `justify-center`}`}>
          <Button
            icon={buttonType === 'edit' ? <PenIcon /> : buttonType === 'link' ? <LinkIcon /> : null}
            className={`${buttonType === 'exchange' && `m-0`}`}
            textClassName="hidden xl:block"
            text={buttonType === 'exchange' ? dict.Profile.exchange : null}
            variant={buttonType === 'exchange' ? 'button' : 'tablet'}
          />
        </div>
      </div>
    </div>
  );
}
