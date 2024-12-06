import { useContext, useEffect } from "react";
import HotelSectionIcon from "@/app/assets/icons/HotelSectionIcon";
import AppButton from "@/app/components/bits/AppButton";
import HotelCard from "@/app/components/HotelCard";
import MainContext from "@/app/context/global.context";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@/service/services";
import Skeleton from "@/app/components/bits/Skeleton";

export default function HotelSection() {
  const { keyword }: any = useContext(MainContext);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["GetHotelQuery"],
    queryFn: () => Service.GetHotelQuery(`?query=${keyword || "usa"}`),
  });

  useEffect(() => {
    refetch();
  }, [keyword]);

  return (
    <div className="p-5 bg-[#344054] rounded-[3px] mt-6 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <HotelSectionIcon /> <div className="text-sm text-[#fff]">Hotels</div>
        </div>
        <AppButton
          placeholder="Add Hotels"
          background="bg-[#fff]"
          textColor="text-[#000]"
          className="p-3"
          containerClassName="w-[140px]"
          textClassName="text-[12px]"
        />
      </div>
      {isLoading || isFetching ? <Skeleton /> : ""}
      {data?.data?.length === 0 ? <div>No Data</div> : ""}
      {!isLoading || !isFetching
        ? data?.data?.map(
            (
              item: {
                dest_id: string;
                search_type: string;
                city_name: string;
                label: string;
                name: string;
                region: string;
                hotels: number;
                nr_hotels: number;
                roundtrip: string;
                city_ufi: any;
                cc1: string;
                type: string;
                image_url: string;
                lc: string;
                latitude: number;
                country: string;
                longitude: number;
                dest_type: string;

                /*  dest_type: string;
            cc1: string;
            city_name: string;
            label: string;
            longitude: number;
            latitude: number;
            type: string;
            region: string;
            city_ufi: number;
            name: string;
            roundtrip: string;
            country: string;
            image_url: string;
            dest_id: string;
            nr_hotels: number;
            lc: string;
            hotels: number; */
              },
              index: number
            ) => {
              return <HotelCard key={index} {...item} />;
            }
          )
        : ""}
    </div>
  );
}
