import Image from "next/image";
import React from "react";
import LogoImg from "@/app/assets/icons/logo.png";

export default function Logo() {
  return <Image src={LogoImg} className="w-12 h-12" alt="logo" />;
}
