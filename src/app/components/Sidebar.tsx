import React from "react";
import ActivitiesIcon from "@/app/assets/side-nav-icons/ActivitiesIcon";
import HotelsIcon from "@/app/assets/side-nav-icons/HotelsIcon";
import FlightIcon from "@/app/assets/side-nav-icons/FlightIcon";
import StudyIcon from "@/app/assets/side-nav-icons/StudyIcon";
import VisaIcon from "@/app/assets/side-nav-icons/VisaIcon";
import ImmigrationIcon from "@/app/assets/side-nav-icons/ImmigrationIcon";
import MedicalIcon from "@/app/assets/side-nav-icons/MedicalIcon";
import PackageIcon from "@/app/assets/side-nav-icons/PackageIcon";
import DirectionalIcon from "@/app/assets/icons/DirectionalIcon";
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
    | Promise<React.ReactElement>
    | null
    | undefined;
  link: any;
}
export default function SideBar() {
  const links = [
    { icon: ActivitiesIcon, text: "Activities", link: "/home" },
    { icon: HotelsIcon, text: "Hotels", link: "/home" },
    { icon: FlightIcon, text: "Flight", link: "/home" },
    { icon: StudyIcon, text: "Study", link: "/home" },
    { icon: VisaIcon, text: "Visa", link: "/home" },
    { icon: ImmigrationIcon, text: "Immigration", link: "/home" },
    { icon: MedicalIcon, text: "Medical", link: "/home" },
    { icon: PackageIcon, text: "Vacation Packages", link: "/home" },
  ];
  return (
    <div className="lg:block hidden p-6 bg-white">
      <div className="">
        {links?.map((item: LinkInterface, index: number) => {
          return (
            <div
              key={index}
              className="text-center flex items-center gap-2 mb-8"
            >
              <item.icon />
              <div
                className={`text-[12px] font-[Poppins-Medium] ${"text-[#647995]"}`}
              >
                {item?.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-3 bg-[#F0F2F5] flex items-center justify-between">
        <div className="bg-[#0D6EFD] p-3 text-white rounded-[4px] w-fit text-[12px]">
          Go
        </div>
        <div
          className={`text-[11px] font-[Poppins-Bold] ml-1 w-full ${"text-[#647995]"}`}
        >
          Personal Account
        </div>
        <DirectionalIcon />
      </div>
    </div>
  );
}
