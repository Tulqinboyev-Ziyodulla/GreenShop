import React, { ReactNode } from "react";

interface ButtonTypes {
  type: "button" | "reset" | "submit" | undefined;
  title: string;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  extraStyle?: string;
}

const Button: React.FC<ButtonTypes> = ({
  title,
  type,
  iconLeft,
  iconRight,
  onClick,
  extraStyle,
}) => {
  return (
    <button
      className={`bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${extraStyle}`}
      type={type}
      onClick={onClick}
      aria-label={title}
    >
      {iconLeft && iconLeft}
      {title}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
