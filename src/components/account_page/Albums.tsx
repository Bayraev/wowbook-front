import React from 'react';
import lightSvg from '@/assets/svg/light.svg';
import Image from 'next/image';
import Title from '../ui/Title';
import Board from '../ui/Board';
import InventorySlider from '../ui/ItemsSlider';

import starSvg from '@/assets/svg/start-sticker.svg';

export type TAlbum = { image: string; title: string };

export default function Albums() {
  const albums: TAlbum[] = [
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
      <Title text="Альбомы" />

      <div className="relative flex justify-center size-full">
        {/* all content  */}
        <Image className="absolute z-0 top-[-150px]" src={lightSvg} alt="/" />
        {/* slider */}
        <Board
          height={albums.length === 10 ? null : '298px'}
          isExtended={albums.length === 10}
          style={{ paddingInline: '0px' }}>
          <InventorySlider type={{ type: 'Albums', item: albums }} item={albums} />
        </Board>
      </div>
    </div>
  );
}
