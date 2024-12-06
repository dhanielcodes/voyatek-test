import React, { ReactNode } from "react";
import FlightLogo from "@/app/assets/icons/FlightLogo";
import AppButton from "./bits/AppButton";
import FlightTakeoffIcon from "@/app/assets/icons/FlightTakeoffIcon";
import FlightLandingIcon from "@/app/assets/icons/FlightLanding";
import Line from "@/app/assets/icons/Line";
import { XMarkIcon } from "@heroicons/react/16/solid";
import NairaIcon from "@/app/assets/icons/NairaIcon";
/* interface Card {
} */
interface FlightCardTypeInterface {
  id: string;
  type: string;
  name: string;
  code: string;
  city: string;
  cityName: string;
  regionName: string;
  country: string;
  countryName: string;
  countryNameShort: string;
  photoUri: string;
  distanceToCity: {
    value: number;
    unit: string;
  };
  parent: string;
}
export default function FlightCard(props: FlightCardTypeInterface) {
  return (
    <div className={`w-full bg-white mt-4 flex flex-col lg:flex-row`}>
      <div>
        <div className="grid lg:grid-cols-12 grid-cols-1 grid-rows-3 lg:grid-rows-1 w-full p-4">
          <div className="flex items-center gap-2 col-span-3 w-full">
            <FlightLogo />
            <div>
              <div className="text-[16px]">{props.name}</div>
              <div className="flex items-center gap-2">
                <div className="text-[#676E7E] text-[12px]"> {props.id}</div>
                <AppButton
                  placeholder="First Class"
                  className="p-1 w-[80] bg-[#0A369D]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-2 col-span-6 w-full">
            <div className="w-[140px]">
              <div className="text-right text-[18px]">08:35</div>
              <div className="text-[#676E7E] text-right text-[12px]">
                Sun, 20 Aug
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-[85%] mx-auto justify-between">
                <FlightTakeoffIcon />
                <div className="text-[12px] text-[#676E7E]">
                  Distance: {Math.round(props.distanceToCity?.value)}{" "}
                  {props.distanceToCity?.unit}
                </div>
                <FlightLandingIcon />
              </div>
              <Line width={"85%"} className="my-3 mx-auto" />
              <div className="flex w-[85%] mx-auto justify-between">
                <div className="text-[12px]">LOS</div>
                <div className="text-[12px] text-[#676E7E]">Direct</div>
                <div className="text-[12px]">LOS</div>
              </div>
            </div>
            <div className="w-[140px]">
              <div className="text-left text-[18px]">08:35</div>
              <div className="text-[#676E7E] text-[12px]">Sun, 20 Aug</div>
            </div>
          </div>
          <div className="lg:col-span-3 self-center">
            <div className="text-[23px] text-right font-bold flex items-center justify-end">
              {" "}
              <NairaIcon /> 123,450.00
            </div>
          </div>
        </div>
        <div className="p-4 border-y border-[#E4E7EC]">
          <div className="text-[13px] text-[#676E7E]">
            Facilites: Baggage: 20kg, Cabin Baggage: 20kg in flight
            entertainment in flight meal USB Port{" "}
          </div>
        </div>
        <div className="p-4 flex items-center gap-4">
          <div className="text-[14px] text-[#0D6EFD]">Flight details</div>
          <div className="text-[14px] text-[#0D6EFD]">Price details</div>
        </div>
      </div>
      <div className="bg-[#FBEAE9] grid place-items-center w-[4%] cursor-pointer">
        <XMarkIcon width={20} color="red" />
      </div>
    </div>
  );
}
