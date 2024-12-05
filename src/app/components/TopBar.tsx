"use client";
import React, { useEffect, useState } from "react";
import Logo from "../assets/top-bar-icons/Logo";
import { Form, Formik } from "formik";
import FormInput from "./bits/FormInput";
import HomeIcon from "../assets/top-bar-icons/Home";
import DashboardIcon from "../assets/top-bar-icons/DashboardIcon";
import WalletIcon from "../assets/top-bar-icons/WalletIcon";
import PlanIcon from "../assets/top-bar-icons/PlanIcon";
import CommissionIcon from "../assets/top-bar-icons/CommissionIcon";
import { usePathname, useRouter } from "next/navigation";
import AppButton from "./bits/AppButton";

export default function TopBar() {
  const links = [
    { icon: HomeIcon, text: "Home", link: "/home" },
    { icon: DashboardIcon, text: "Dashboard", link: "/house" },
    { icon: WalletIcon, text: "Wallet", link: "/wallet" },
    { icon: WalletIcon, text: "Wallet", link: "/yhup" },
    { icon: PlanIcon, text: "Plan a trip", link: "/" },
    { icon: CommissionIcon, text: "Commission for life", link: "/norm" },
  ];

  const navigate = useRouter();

  const path = usePathname();

  return (
    <div className="p-4">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <Formik
            initialValues={{ name: "" }}
            onSubmit={(values) => {
              console.log("Form submitted with values:", values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormInput />
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            {links?.map(
              (item: {
                icon: any;
                text:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                link: any;
              }) => {
                return (
                  <div className="text-center grid place-items-center">
                    <item.icon active={path === item?.link} />
                    <div
                      className={`${
                        path === item?.link
                          ? "text-[#344054]"
                          : "text-[#667185]"
                      }`}
                    >
                      {item?.text}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <svg
            width="2"
            height="48"
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
          <AppButton
            placeholder="Subscribe"
            background="#0D6EFD"
            textColor="#FFF"
          />
        </div>
      </div>
    </div>
  );
}
