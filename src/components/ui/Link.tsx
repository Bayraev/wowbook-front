export interface LinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  target?: "_blank";
  rel?: "noreferrer";
}

export function Link({ children, href, onClick, target, rel }: LinkProps) {
  return (
    <a
      className="h-4 flex items-center justify-center"
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      <span className="font-monserrat text-[12px] leading-[12px] sm:text-[16px] sm:leading-[16px] font-medium text-center underline decoration-[#BD89A9] underline-offset-2 opacity-60 bg-[#BD89A9] bg-clip-text text-transparent hover:bg-gradient-to-b hover:from-[#F1C4E2] hover:to-[#AF809F] hover:opacity-100 transition-all ease-in-out duration-300">
        {children}
      </span>
    </a>
  );
}
