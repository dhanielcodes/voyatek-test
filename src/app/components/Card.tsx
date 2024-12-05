import React, { ReactNode } from "react";
interface Card {
  bg?: string;
  textColor?: string;
  children: ReactNode;
  title: string;
  description: string;
}
export default function Card({
  bg,
  textColor,
  children,
  title = "Title",
  description = "Build Personalize and optimize",
}: Card) {
  return (
    <div
      className={`p-3 py-4 w-[210px] ${
        bg ? bg : "bg-[#000031]  rounded-[4px]"
      }`}
    >
      <h2
        className={`font-[Poppins-Bold] text-[12px] ${
          textColor ? textColor : "text-[#fff] "
        }`}
      >
        {title}
      </h2>
      <p
        className={`rounded-md mt-2 mb-6 text-[10px] ${
          textColor ? textColor : "text-[#fff] "
        }`}
      >
        {description}
      </p>
      {children}
    </div>
  );
}
