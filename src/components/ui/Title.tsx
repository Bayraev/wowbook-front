import Image from 'next/image';
import React from 'react';
import AppsRightIconSvg from '@/assets/svg/apps-right.svg';
import AppsLeftIconSvg from '@/assets/svg/apps-left.svg';

type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  return (
    <span className="flex justify-center w-full text-slate-800 mb-[30px]">
      <div className="flex  ">
        <Image src={AppsLeftIconSvg} alt="/" className="fill-blue-500 text-blue-500" />
        <h2 className="font-copperplate mx-[15px] font-normal text-shadow block bg-gradient-to-r from-[rgb(231,181,214)] to-[rgb(255,198,236)] bg-clip-text text-transparent  text-outline text-[37px]  ">
          {text}
        </h2>
        <Image src={AppsRightIconSvg} alt="/" className="fill-blue-500 text-blue-500" />
      </div>
    </span>
  );
}
