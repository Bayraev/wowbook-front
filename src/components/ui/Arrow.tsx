import { Button } from './Button';
import Image from 'next/image';
import RightArrowIcon from '@/assets/svg/layout/single_arrow_right.svg';
import LeftArrowIcon from '@/assets/svg/layout/single_arrow_left.svg';
import { cn } from '@/lib/utils';

export interface IArrowProps {
  buttonClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
  direction: 'left' | 'right';
}

export function Arrow({ iconClassName, onClick, direction, buttonClassName }: IArrowProps) {
  return (
    <Button
      contentClassName="p-0 size-full h-11 w-11 rounded-full"
      borderClassName="h-[48px] -mt-[46px]"
      className={buttonClassName}
      icon={
        <Image
          src={direction === 'left' ? LeftArrowIcon : RightArrowIcon}
          className={cn('size-full', iconClassName)}
          alt="Prev"
        />
      }
      onClick={onClick}
      text={null}
    />
  );
}
