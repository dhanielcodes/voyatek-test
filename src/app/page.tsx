"use client";

import Banner from "@/app/assets/images/banner.png";
import Person from "@/app/assets/icons/box.png";
import Image from "next/image";
import DateTag from "./components/DateTag";
import Card from "./components/Card";
import AppButton from "./components/bits/AppButton";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import BoxPersonIcon from "./assets/icons/BoxPersonIcon";
import FlightSection from "@/app/sections/FlightSection";
import HotelSection from "./sections/HotelSection";
import ActivitySection from "./sections/ActivitySection";
//import useScreenSize from "@/libs/useScreenSize";

export default function Home() {
  //const { height } = useScreenSize();

  return (
    <div className={`p-6 bg-[#fff] w-full]`}>
      <Image src={Banner} className="w-full" alt="profile" />
      <div className="flex my-4 justify-between">
        <div>
          <DateTag dateFrom="21 March 2024" dateTo="21 April 2024" />
          <h1 className="text-lg font-[Poppins-Bold] my-1">
            Bahamas Family Trip
          </h1>
          <div className="text-[#676E7E] text-xs">
            New York,  United States of America | Solo Trip
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AppButton
            background="bg-[#E7F0FF]"
            className="w-[160px] py-3"
            placeholder={
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0002 8.62523C20.0002 8.87387 19.9014 9.11233 19.7256 9.28814C19.5498 9.46396 19.3113 9.56273 19.0627 9.56273H18.4377V10.1877C18.4377 10.4364 18.3389 10.6748 18.1631 10.8506C17.9873 11.0265 17.7488 11.1252 17.5002 11.1252C17.2515 11.1252 17.0131 11.0265 16.8373 10.8506C16.6615 10.6748 16.5627 10.4364 16.5627 10.1877V9.56273H15.9377C15.689 9.56273 15.4506 9.46396 15.2748 9.28814C15.099 9.11233 15.0002 8.87387 15.0002 8.62523C15.0002 8.37659 15.099 8.13813 15.2748 7.96232C15.4506 7.7865 15.689 7.68773 15.9377 7.68773H16.5627V7.06273C16.5627 6.81409 16.6615 6.57563 16.8373 6.39982C17.0131 6.224 17.2515 6.12523 17.5002 6.12523C17.7488 6.12523 17.9873 6.224 18.1631 6.39982C18.3389 6.57563 18.4377 6.81409 18.4377 7.06273V7.68773H19.0627C19.3113 7.68773 19.5498 7.7865 19.7256 7.96232C19.9014 8.13813 20.0002 8.37659 20.0002 8.62523ZM15.7181 13.0221C15.8781 13.2125 15.9559 13.4587 15.9343 13.7064C15.9128 13.9542 15.7937 14.1832 15.6033 14.3432C15.4129 14.5032 15.1667 14.5809 14.919 14.5594C14.6712 14.5378 14.4422 14.4188 14.2822 14.2284C13.2127 12.9549 11.3283 11.4377 8.43768 11.4377C6.18065 11.4377 4.10487 12.4284 2.59315 14.2284C2.43319 14.4188 2.20414 14.5378 1.95639 14.5594C1.70863 14.5809 1.46247 14.5032 1.27205 14.3432C1.08164 14.1832 0.962563 13.9542 0.941026 13.7064C0.919488 13.4587 0.997252 13.2125 1.15721 13.0221C2.17575 11.792 3.48243 10.8326 4.96112 10.2291C4.04161 9.50622 3.37033 8.51465 3.04069 7.39241C2.71105 6.27016 2.73945 5.07307 3.12193 3.96772C3.50441 2.86237 4.22196 1.90374 5.17471 1.22525C6.12746 0.546748 7.26802 0.182129 8.43768 0.182129C9.60734 0.182129 10.7479 0.546748 11.7007 1.22525C12.6534 1.90374 13.3709 2.86237 13.7534 3.96772C14.1359 5.07307 14.1643 6.27016 13.8347 7.39241C13.505 8.51465 12.8337 9.50622 11.9142 10.2291C13.3931 10.8323 14.6998 11.7918 15.7181 13.0221ZM8.43768 9.56273C9.17936 9.56273 9.90438 9.34279 10.5211 8.93074C11.1378 8.51868 11.6184 7.93301 11.9022 7.24779C12.1861 6.56257 12.2603 5.80857 12.1156 5.08114C11.9709 4.35371 11.6138 3.68553 11.0893 3.16108C10.5649 2.63663 9.8967 2.27948 9.16927 2.13478C8.44184 1.99009 7.68784 2.06435 7.00262 2.34818C6.31739 2.63201 5.73172 3.11266 5.31967 3.72934C4.90761 4.34602 4.68768 5.07105 4.68768 5.81273C4.68871 6.80697 5.08413 7.7602 5.78717 8.46324C6.49021 9.16628 7.44344 9.5617 8.43768 9.56273Z"
                  fill="#0D6EFD"
                />
              </svg>
            }
            width="100%"
          />
          <EllipsisHorizontalIcon color="#000" width={24} />
        </div>
      </div>

      <div className="flex my-4 justify-between items-start">
        <div className="flex gap-1">
          <Card
            title="Activities"
            description="Build, personalize, and optimize your itineraries with our trip planner."
          >
            <AppButton placeholder="Add Activities" width="100%" />
          </Card>

          <Card
            title="Hotels"
            textColor="text-[#000]"
            description="Build, personalize, and optimize your itineraries with our trip planner."
            bg="bg-[#E7F0FF]"
          >
            <AppButton placeholder="Add Hotels" width="100%" />
          </Card>

          <Card
            title="Flights"
            description="Build, personalize, and optimize your itineraries with our trip planner."
            bg="bg-[#0D6EFD]"
          >
            <AppButton
              placeholder="Add Flights"
              background="bg-[#fff]"
              textColor="text-[#0D6EFD]"
              width="100%"
            />
          </Card>
        </div>
        <div className="flex items-center gap-2">
          <Image src={Person} alt="person" />
          <BoxPersonIcon />
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-base font-[Poppins-Bold] my-1">Trip itineraries</h1>
        <div className="text-[#676E7E] text-xs">
          Your trip itineraries are placed here
        </div>

        <FlightSection />
        <HotelSection />
        <ActivitySection />
      </div>
    </div>
  );
}
