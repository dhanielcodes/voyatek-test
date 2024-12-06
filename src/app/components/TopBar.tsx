"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "@/app/assets/top-bar-icons/Logo";
import { Form, Formik } from "formik";
import FormInput from "./bits/FormInput";
import HomeIcon from "@/app/assets/top-bar-icons/Home";
import DashboardIcon from "@/app/assets/top-bar-icons/DashboardIcon";
import WalletIcon from "@/app/assets/top-bar-icons/WalletIcon";
import PlanIcon from "@/app/assets/top-bar-icons/PlanIcon";
import CommissionIcon from "@/app/assets/top-bar-icons/CommissionIcon";
import { usePathname, useRouter } from "next/navigation";
import AppButton from "./bits/AppButton";
import BellIcon from "@/app/assets/top-bar-icons/BellIcon";
import CartIcon from "@/app/assets/top-bar-icons/CartIcon";
import CreateIcon from "@/app/assets/top-bar-icons/CreateIcon";
import Profile from "@/app/assets/icons/profile.png";
import Image from "next/image";
import ArrowDropDown from "@/app/assets/icons/ArrowDropDown";
import SearchIcon from "@/app/assets/icons/Search";
import MainContext from "../context/global.context";

interface LinkInterface {
  icon: any;
  text:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  link: any;
}

export default function TopBar() {
  const links = [
    { icon: HomeIcon, text: "Home", link: "/home" },
    { icon: DashboardIcon, text: "Dashboard", link: "/house" },
    { icon: WalletIcon, text: "Wallet", link: "/wallet" },
    { icon: PlanIcon, text: "Plan a trip", link: "/" },
    { icon: CommissionIcon, text: "Commission for life", link: "/norm" },
  ];

  const links2 = [
    { icon: BellIcon, text: "Notification", link: "/home" },
    { icon: CartIcon, text: "Carts", link: "/house" },
    { icon: CreateIcon, text: "Create", link: "/wallet" },
  ];

  const navigate = useRouter();

  const path = usePathname();

  const { setKeyword }: any = useContext(MainContext);

  return (
    <div className="p-4">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => {
              console.log("Form submitted with values:", values);
              setKeyword(values.search);
            }}
          >
            {({ handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <FormInput
                  onChange={handleChange}
                  name="search"
                  placeholder="search"
                  icon={<SearchIcon />}
                  containerClassName="w-[310px]"
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {links?.map((item: LinkInterface, index: number) => {
              return (
                <div
                  key={index}
                  className="text-center grid place-items-center"
                >
                  <item.icon active={path === item?.link} />
                  <div
                    className={`text-[12px] ${
                      path === item?.link ? "text-[#344054]" : "text-[#667185]"
                    }`}
                  >
                    {item?.text}
                  </div>
                </div>
              );
            })}
          </div>
          <svg
            width="2"
            height="38"
            viewBox="0 0 2 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="2.18558e-08"
              x2="0.999998"
              y2="48"
              stroke="#98A2B3"
            />
          </svg>
          <AppButton placeholder="Subscribe" className="p-3" />
          <div className="flex items-center gap-3">
            {links2?.map((item: LinkInterface, index: number) => {
              return (
                <div
                  key={index}
                  className="text-center grid place-items-center"
                >
                  <item.icon active={path === item?.link} />
                  <div
                    className={`text-[12px] ${
                      path === item?.link ? "text-[#344054]" : "text-[#667185]"
                    }`}
                  >
                    {item?.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Image src={Profile} className="w-10 h-10" alt="profile" />
            <ArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
