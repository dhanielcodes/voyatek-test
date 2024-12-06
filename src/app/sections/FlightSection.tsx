import FlightIcon from "@/app/assets/icons/FlightIcon";
import AppButton from "@/app/components/bits/AppButton";
import FlightCard from "@/app/components/FlightCard";
import MainContext from "../context/global.context";
import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@/service/services";
import Skeleton from "../components/bits/Skeleton";

export default function FlightSection() {
  const { keyword }: any = useContext(MainContext);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["GetFlightQuery"],
    queryFn: () => Service.GetFlightQuery(`?query=${keyword || "usa"}`),
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
      {isLoading || isFetching ? <Skeleton /> : ""}
      {data?.data?.length === 0 ? <div>No Data</div> : ""}
      {!isLoading || !isFetching
        ? data?.data?.map(
            (
              item: {
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
              },
              index: number
            ) => {
              return <FlightCard key={index} {...item} />;
            }
          )
        : ""}{" "}
    </div>
  );
}
