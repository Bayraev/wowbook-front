import React from 'react';
import lightSvg from '@/assets/svg/light.svg';
import Image from 'next/image';
import Title from '../ui/Title';
import Board from '../ui/Board';
import InventorySlider from '../ui/ItemsSlider';

export type TBook = { author: string; title: string };

export default function Books() {
  const books: TBook[] = [
    {
      author: 'Дем Михайлов',
      title: '4осподство клана Неспящих',
    },
    {
      author: 'Дем Михайлов',
      title: '5осподство клана Неспящих',
    },
    {
      author: 'Дем Михайлов',
      title: '4осподство клана Неспящих',
    },
    {
      author: 'Дем Михайлов',
      title: '5осподство клана Неспящих',
    },
    {
      author: 'Дем Михайлов',
      title: '4осподство клана Неспящих',
    },
  ];

  return (
    <div className="w-full">
      <Title text="Книги" />

      <div className="relative flex justify-center size-full">
        {/* all content  */}
        <Image className="absolute z-0 top-[-150px]" src={lightSvg} alt="/" />
        {/* slider */}
        <Board
          isExtended={books.length === 10}
          // children={<InventorySlider type={{ type: 'Books', item: books }} item={books} />}
        >
          <InventorySlider type={{ type: 'Books', item: books }} item={books} />
        </Board>
      </div>
    </div>
  );
}
