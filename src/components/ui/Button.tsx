import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// **** TAILWIND **** //
const default_btn_container = `
  flex flex-col justify-center items-center p-0 mb-10 group
  hover:shadow-[0px_4px_16.4px_rgba(0,0,0,0.31)]
  hover:rounded-full
  active:shadow-[0px_4px_16.4px_rgba(0,0,0,0.31)]
`;

const default_btn_content = `
  flex flex-row justify-center items-center gap-3 block-select
  px-6 py-3 bg-gradient-to-b from-[#9b6688cc] to-[#50314680]
  shadow-[0px_4px_16.4px_rgba(0,0,0,0.31)]
  backdrop-blur-sm rounded-[32.9079px] border-2
  border-[rgba(155,113,140,1)] group-hover:border-[rgba(155,113,140,1)]
  group-active:bg-gradient-to-b group-active:from-[#34222e80] group-active:to-[#6b475e80]
  group-active:border-[rgba(155,113,140,0.5)]
`;

const default_btn_border = `
  w-[calc(100%+4px)] h-[52px] border-2 border-[#2a1a24] 
  rounded-full mt-[-50px] block-select
`;

const default_btn_text = `
  font-montserrat font-medium text-[15px] sm:text-[16px] leading-5 text-center text-white
  group-active:text-[rgba(255,255,255,0.5)]
`;

const default_btn_icon = `
  flex order-1 flex-grow-0 
  group-active:opacity-60
`;

const tablet_btn_container = `
  flex flex-row justify-center items-center px-[3px] py-[13px] gap-[13px] h-[48px] group
  bg-[#271220] border-[2px] border-[#513748] rounded-[35px]
  hover:border-[#614c58] hover:shadow-lg
  active:border-[#3d2a36]
`;
const tablet_btn_icon = `
  relative flex flex-row justify-center items-center p-[8px] gap-[10px] w-[38px] h-[38px] order-0 block-select
  bg-gradient-to-b from-[#7a4d6a] to-[#4f2d44] border-[1.5px] border-[#714a63] rounded-full
  group-hover:bg-gradient-to-b group-hover:from-[#8b5573] group-hover:to-[#5a324c] group-hover:border-[#825268]
  group-active:opacity-50 group-active:bg-gradient-to-b group-active:from-[#7a4d6a] group-active:to-[#4f2d44]
`;
const tablet_btn_text = `
  h-[20px] font-montserrat font-medium text-[16px] leading-[20px] mr-[16px] order-1 block-select
  text-transparent bg-clip-text bg-gradient-to-b from-[#f1c4e2] to-[#af809f]
  group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#ffffff] group-hover:to-[#bfadb9]
  group-active:bg-clip-text group-active:bg-gradient-to-b group-active:from-[#917588] group-active:to-[#5d3e53]
`;

const buttonContainerVariants = cva("", {
  variants: {
    variant: {
      button: default_btn_container,
      tablet: "",
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

const buttonContentVariants = cva("", {
  variants: {
    variant: {
      button: default_btn_content,
      tablet: tablet_btn_container,
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      button: default_btn_text,
      tablet: tablet_btn_text,
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

const buttonIconVariants = cva("", {
  variants: {
    variant: {
      button: default_btn_icon,
      tablet: tablet_btn_icon,
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

const buttonBorderVariants = cva("", {
  variants: {
    variant: {
      button: default_btn_border,
      tablet: "hidden",
    },
  },
  defaultVariants: {
    variant: "button",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonContainerVariants> {
  text: string | null | React.ReactNode;
  icon: React.ReactNode | null;
  containerClassName?: string;
  contentClassName?: string;
  textClassName?: string;
  iconClassName?: string;
  borderClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      containerClassName,
      contentClassName,
      textClassName,
      iconClassName,
      borderClassName,
      variant,
      text,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonContainerVariants({ variant, className: containerClassName })
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            buttonContentVariants({ variant, className: contentClassName })
          )}
        >
          {text ? (
            <span
              className={cn(
                buttonTextVariants({ variant, className: textClassName })
              )}
            >
              {text}
            </span>
          ) : null}
          {icon ? (
            <span
              className={cn(
                buttonIconVariants({ variant, className: iconClassName })
              )}
            >
              {icon}
            </span>
          ) : null}
        </div>
        <div
          className={cn(
            buttonBorderVariants({ variant, className: borderClassName })
          )}
        >
          <span />
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonContainerVariants };
