import React from 'react';

type Props = {
  children: React.ReactNode;
  isExtended?: boolean;
  height?: string | null;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Board({ children, isExtended, height, width, className, style }: Props) {
  return (
    <div
      className={`z-10 w-[1278px] p-[0.2px] rounded-28 overflow-visible bg-gradient__3 border-2 border-[#271822] ${isExtended ? `h-[646px]` : ''}`}
      style={{
        height: height ? `${height}` : undefined,
        width: width ? `${width}` : undefined,
      }}>
      {/* books */}
      <div
        style={style}
        className={`relative w-full h-full rounded-28 border-2 border-[#634357] p-[22px] ${className}`}>
        {children}
      </div>
    </div>
  );
}
