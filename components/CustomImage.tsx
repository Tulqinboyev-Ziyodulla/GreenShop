import Image from "next/image";
import React from "react";

interface ImagePropsType {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export const CustomImage: React.FC<ImagePropsType> = ({
  src,
  alt,
  width,
  height,
  priority,
  className,
  onClick,
}) => {
  return (
    <Image
      onClick={onClick}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};
