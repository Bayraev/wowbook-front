'use client';

import { useState, useRef } from 'react';
import clsx from 'clsx'; // For conditionally applying classes
import { Arrow } from './Arrow';
import { TBook } from '../account_page/Books';
import Image from 'next/image';

import bookSvg from '@/assets/img/book.svg';
import starStickerSvg from '@/assets/svg/start-sticker.svg';
import AlbumImageSvg from '@/assets/svg/album-image.svg';
import { TSticker } from '../account_page/Stickers';
import { TAlbum } from '../account_page/Albums';

type ItemType =
  | { type: 'Books'; item: TBook[] }
  | { type: 'Stickers'; item: TSticker[] }
  | { type: 'Albums'; item: TAlbum[] };

type Props = {
  item: TBook[] | TSticker[];
  type: ItemType;
};

const InventorySlider = ({ item, type }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const ITEM_WIDTH = 210; // Width of a single item in px
  const VISIBLE_ITEMS = 5; // Number of visible items at a time
  const MAX_VIZIBLE_ITEMS = 10;
  const SLIDE_DISTANCE = ITEM_WIDTH * VISIBLE_ITEMS;

  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const maxScroll = (item.length - VISIBLE_ITEMS) * ITEM_WIDTH;
    let newPosition = scrollPosition;

    if (direction === 'left') {
      newPosition = Math.max(scrollPosition - SLIDE_DISTANCE, 0);
    } else {
      newPosition = Math.min(scrollPosition + SLIDE_DISTANCE, maxScroll + 50);
    }

    setScrollPosition(newPosition);
    sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
  };

  const BookItem = ({ author, title }: TBook) => (
    <div className="relative flex-shrink-0 w-[230px] h-[279px]   mr-[18px]">
      <Image src={bookSvg as string} alt="/" className="w-[230px] h-[231px]   rounded-[13px]" />
      <div className="border-box text-nowrap px-[4px] absolute bottom-0 w-full h-[40px] text-[14px]">
        <p>{author}</p>
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );

  const StickerItem = ({ image, title }: TSticker) => (
    <div className="relative flex justify-center flex-shrink-0 w-[203px] h-[210px] ml-[38px] ">
      <Image
        src={starStickerSvg as string}
        alt="/"
        className="w-[182px] h-[182px]   rounded-[13px]"
      />
      <div className="flex justify-center items-center border-box text-nowrap px-[4px] absolute bottom-0 w-full h-[40px] text-[14px]">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );

  const AlbumItem = ({ image, title }: TSticker) => (
    <div className="relative flex justify-center flex-shrink-0 w-[230px] h-[254px] ml-[20px] ">
      <Image
        src={AlbumImageSvg as string}
        alt="/"
        className="w-[230px] h-[230px]   rounded-[13px]"
      />
      <div className="absolute bottom-[-25px] border-box text-nowrap px-[4px] absolute bottom-0 w-full h-[40px] text-[14px]">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );

  return (
    <div
      className={`${`relative w-full h-[279px] overflow-hidden ${item.length === 10 && `flex-wrap w-[1320px] h-[646px] justify-between`}`}`}>
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={`${`flex  flex-wrap `} ${
          item.length > VISIBLE_ITEMS &&
          (item.length > MAX_VIZIBLE_ITEMS || item.length < MAX_VIZIBLE_ITEMS
            ? ` transition-transform duration-300 ease-out `
            : ` h-[640px]`)
        }`}
        style={{ width: `${item.length !== 10 ? `${item.length * 250}px` : null}` }}>
        {/* RENDER ZONE */}
        {type.type === 'Books' &&
          type.item.map((book, index) => (
            <BookItem key={index} author={book.author} title={book.title} />
          ))}
        {type.type === 'Stickers' &&
          type.item.map((sticker, index) => (
            <StickerItem key={index} image={sticker.image} title={sticker.title} />
          ))}
        {type.type === 'Albums' &&
          type.item.map((album, index) => (
            <AlbumItem key={index} image={album.image} title={album.title} />
          ))}
      </div>

      {/* Navigation Arrows */}
      {item.length > VISIBLE_ITEMS &&
      item.length > VISIBLE_ITEMS &&
      (item.length > MAX_VIZIBLE_ITEMS || item.length < MAX_VIZIBLE_ITEMS) ? (
        <>
          <span
            className={clsx(
              'absolute top-[-22px] left-0 w-[48px] h-full flex items-center justify-center',
              scrollPosition === 0 && 'opacity-50 pointer-events-none',
            )}
            onClick={() => handleScroll('left')}>
            <Arrow direction="left" />
          </span>

          <span
            className={clsx(
              'absolute top-[-22px] right-0 w-[48px] h-full flex items-center justify-center',
              scrollPosition >= (item.length - VISIBLE_ITEMS) * ITEM_WIDTH &&
                'opacity-50 pointer-events-none',
            )}
            onClick={() => handleScroll('right')}>
            <Arrow direction="right" />
          </span>
        </>
      ) : null}
    </div>
  );
};

export default InventorySlider;
