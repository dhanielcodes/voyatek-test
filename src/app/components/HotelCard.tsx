import React, { ReactNode } from "react";
import AppButton from "@/app/components/bits/AppButton";
import { StarIcon, XMarkIcon } from "@heroicons/react/16/solid";
/* interface Card {
} */
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import HotelImg from "@/app/assets/images/hotel.png";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import SliderArrowLeft from "../assets/icons/SliderArrowLeft";
import SliderArrowRight from "../assets/icons/SliderArrowRight";
import NairaIcon from "../assets/icons/NairaIcon";

const SlideControls = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between w-[90%] absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
      <SliderArrowLeft
        className="cursor-pointer"
        onClick={() => swiper.slidePrev()}
      />
      <SliderArrowRight
        className="cursor-pointer"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default function HotelCard() {
  return (
    <div className={`w-full bg-white mt-4 flex rounded-[3px]`}>
      <div className="w-full py-4 pl-4">
        <div className="flex">
          <div className="w-[220px] h-[220px] relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="w-full h-full"
            >
              <SwiperSlide className="w-full h-full">
                <Image
                  src={HotelImg}
                  className="w-full h-full object-cover rounded-md"
                  alt="hotel img"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full">
                <Image
                  src={HotelImg}
                  className="w-full h-full object-cover rounded-md"
                  alt="hotel img"
                />
              </SwiperSlide>
              <SlideControls />
            </Swiper>
          </div>

          <div className="w-full">
            <div className="px-4 pb-4 flex justify-between w-full">
              <div>
                <div className="text-[16px] font-bold">
                  Riviera Resort, Lekki
                </div>
                <div className="text-[14px] w-[80%] my-2">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </div>
                <div className="flex gap-2">
                  <div className="text-[14px] text-[#0D6EFD] flex items-center gap-1">
                    <MapPinIcon width={16} /> <div>Show in map</div>
                  </div>
                  <div className="text-[14px] text-[#676E7E] flex items-center gap-1">
                    <StarIcon color="gold" width={16} />
                    <div>8.5 (436)</div>
                  </div>
                  <div className="text-[14px] text-[#676E7E] flex items-center gap-1">
                    <StarIcon color="gold" width={16} />
                    <div>King size room</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[23px] text-right font-bold flex items-center justify-end">
                  <NairaIcon /> 123,450.00
                </div>
                <div className="text-[12px] text-right text-[#1D2433]">
                  Total Price: NGN 560,000
                </div>
                <div className="text-[12px] text-right text-[#1D2433]">
                  1 room x 10 nights incl. taxes
                </div>
              </div>
            </div>
            <div className="p-4 w-full border-y border-[#E4E7EC] flex justify-between">
              <div className="text-[15px] text-[#676E7E]">
                Facilites: Pool Bar
              </div>
              <div className="text-[15px] text-[#676E7E] flex gap-2">
                <CalendarDateRangeIcon color="#676E7E" width={16} />
                <div>Check In: 20-04-2024</div>
                <CalendarDateRangeIcon color="#676E7E" width={16} />
                <div>Check In: 20-04-2024</div>
              </div>
            </div>
            <div className="px-4 pt-4 flex items-center justify-between">
              <div className=" flex items-center gap-4 ">
                <div className="text-[14px] text-[#0D6EFD]">Hotel details</div>
                <div className="text-[14px] text-[#0D6EFD]">Price details</div>
              </div>

              <div className="">
                <div className="text-[14px] text-[#0D6EFD]">Edit details</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FBEAE9] grid place-items-center w-[4%] cursor-pointer">
        <XMarkIcon width={20} color="red" />
      </div>
    </div>
  );
}
