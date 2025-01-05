import React from 'react';
import tableLeftEdgeSvg from '@/assets/svg/table-left-edge.svg';
import tableRightEdgeSvg from '@/assets/svg/table-right-edge.svg';
import toyShadowSvg from '@/assets/svg/toy-shadow.svg';
import toyStarSvg from '@/assets/svg/toy-star.svg';
import Image from 'next/image';

type TToy = {
  img?: string;
  title: string;
  alt?: string;
  id?: string;
};

type Props = {
  toys: TToy[];
  className?: string;
};

export default function Table({ toys, className }: Props) {
  const ToyFragment = ({ img, title, alt, id, index }: TToy & { index: number }) => (
    <div className="relative w-[203px] h-full ">
      {/* toy card, including title */}
      <div className="relative w-[203px] h-[203px] ">
        <Image src={toyShadowSvg} alt="/" className="absolute bottom-0" />
        <Image src={toyStarSvg} width={203} alt="/" className=" z-90 " />
      </div>

      <div
        className={`${`flex justify-center absolute bottom-0 items-center font-montserrat text-gradient__3 font-bold w-[203px] h-[33px] ${index > 0 && `left-border`}`}`}>
        <p>{title} </p>
      </div>
    </div>
  );
  return (
    <div
      className={`${`relative flex justify-center absolute top-[143px] left-0 h-[67.6px] w-full ${className}`}`}>
      {/* table */}
      <div className=" flex h-[99px]    ">
        <Image height={99} className="z-0" src={tableLeftEdgeSvg} alt="/" />

        <span
          style={{
            width: `${170 * toys.length}px`,
          }}
          className="absolute top-[2px] relative z-0 h-[99px]   mx-0 px-0">
          <div
            style={{
              width: `${170 * toys.length}px`,
            }}
            className="relative table-beam-gradient-top  w-full h-[62px]     ">
            {/* books, table beam */}
            <div className="absolute flex justify-center top-[-157px] w-full h-[253px] ">
              {/* toys rendering here!!! */}
              {toys.map((toy: TToy, index) => {
                return <ToyFragment key={index} title={toy.title} index={index} />;
              })}
            </div>
          </div>

          <div
            style={{
              width: `${170 * toys.length}px`,
            }}
            className=" table-beam-gradient-bottom   h-[34px] "
          />
        </span>

        <Image height={99} className="z-[-1]" src={tableRightEdgeSvg} alt="/" />
      </div>
    </div>
  );
}
