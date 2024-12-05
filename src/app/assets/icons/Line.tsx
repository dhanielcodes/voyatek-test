import React from "react";

export default function Line(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="387"
      height="8"
      viewBox="0 0 387 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="387" height="8" rx="4" fill="#E7F0FF" />
      <rect x="128" width="130" height="8" rx="4" fill="#0D6EFD" />
    </svg>
  );
}
