import React from 'react';
import Title from '../ui/Title';
import Image from 'next/image';
import Board from '../ui/Board';
import starSvg from '@/assets/svg/start-sticker.svg';
import InventorySlider from '../ui/ItemsSlider';
import lightSvg from '@/assets/svg/light.svg';

export type TSticker = {
  title: string;
  image: string;
};
export default function Stickers() {
  const stickers: TSticker[] = [
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
    {
      title: 'string',
      image: starSvg,
    },
  ];
  return (
    <div className="w-full">
      <Title text="Стикеры" />

      <div className="relative flex justify-center size-full">
        {/* all content  */}
        <Image className="absolute z-0 top-[-150px]" src={lightSvg} alt="/" />
        {/* slider */}
        <Board height={stickers.length === 10 ? null : '270px'} isExtended={stickers.length === 10}>
          <InventorySlider type={{ type: 'Stickers', item: stickers }} item={stickers} />
        </Board>
      </div>
    </div>
  );
}
