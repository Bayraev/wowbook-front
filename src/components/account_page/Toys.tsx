import Image from 'next/image';
import React from 'react';
import lightSvg from '@/assets/svg/light.svg';
import Title from '../ui/Title';
import Board from '../ui/Board';
import toyStarSvg from '@/assets/svg/toy-star.svg';
import Table from '../ui/Table';

type TToy = {
  img: string;
  title: string;
  alt: string;
  id: string;
};
export default function Toys() {
  const toys: TToy[] = [
    {
      id: 'asdsadsa',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'sdasd',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'gsrdgsdg',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'sdasd',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'gsrdgsdg',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'sdasd',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'gsrdgsdg',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
    {
      id: 'sdasd',
      title: 'Some reward',
      img: toyStarSvg,
      alt: '/',
    },
  ];

  const Wrapper = () => {
    function groupToys(toys: TToy[]) {
      const newArr = [];
      for (let i = 0; i < toys.length; i += 5) {
        newArr.push(toys.slice(i, i + 5));
      }
      return newArr;
    }

    const result = groupToys(toys);
    console.log(result);

    return (
      <div className="border-box w-full h-full   py-[13px]">
        {result.map((toys: TToy[], index) => {
          return (
            <span key={index}>
              <Table toys={toys} className="mb-[220px]" />
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      <Title text="Фигурки" />
      <div className="relative flex justify-center size-full">
        {/* all content  */}
        <Image className="absolute z-0 top-[-150px]" src={lightSvg} alt="/" />
        <Board isExtended={toys.length > 5 && true}>
          <Wrapper />
        </Board>
      </div>
    </div>
  );
}
