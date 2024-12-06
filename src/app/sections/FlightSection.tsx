import FlightIcon from "@/app/assets/icons/FlightIcon";
import AppButton from "@/app/components/bits/AppButton";
import FlightCard from "@/app/components/FlightCard";
import MainContext from "../context/global.context";
import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@/service/services";

export default function FlightSection() {
  const { keyword }: any = useContext(MainContext);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["GetRefundsQuery"],
    queryFn: () => Service.GetFlightQuery(`?query=${keyword || "nigeria"}`),
  });

  useEffect(() => {
    refetch();
  }, [keyword]);
  return (
    <div className="p-5 bg-[#F0F2F5] rounded-[3px] mt-6 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FlightIcon /> <div className="text-sm">Flights</div>
        </div>
        <AppButton
          placeholder="Add Flights"
          background="bg-[#fff]"
          textColor="text-[#0D6EFD]"
          className="p-3"
          containerClassName="w-[140px]"
          textClassName="text-[12px]"
        />
      </div>
      {data?.data?.map(
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
          },
          index: number
        ) => {
          return <FlightCard key={index} {...item} />;
        }
      )}{" "}
    </div>
  );
}
