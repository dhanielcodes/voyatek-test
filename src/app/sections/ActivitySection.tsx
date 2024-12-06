import ActivitySectionIcon from "@/app/assets/icons/ActivitySectionIcon";
import ActivityCard from "@/app/components/ActivityCard";
import AppButton from "@/app/components/bits/AppButton";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import MainContext from "../context/global.context";
import { Service } from "@/service/services";
import Skeleton from "../components/bits/Skeleton";

export default function ActivitySection() {
  const { keyword }: any = useContext(MainContext);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["GetActivitiesQuery"],
    queryFn: () => Service.GetActivitiesQuery(`?query=${keyword || "usa"}`),
  });

  useEffect(() => {
    refetch();
  }, [keyword]);
  return (
    <div className="p-5 bg-[#0054E4] rounded-[3px] mt-6 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ActivitySectionIcon />{" "}
          <div className="text-sm text-[#fff]">Activities</div>
        </div>
        <AppButton
          placeholder="Add Hotels"
          background="bg-[#fff]"
          textColor="text-[#0054E4]"
          className="p-3"
          containerClassName="w-[140px]"
          textClassName="text-[12px]"
        />
      </div>

      {isLoading || isFetching ? <Skeleton /> : ""}
      {data?.data?.products?.length === 0 ? <div>No Data</div> : ""}
      {!isLoading || !isFetching
        ? data?.data?.products?.map(
            (
              item: {
                id: string;
                __typename: string;
                title: string;
                productId: string;
                productSlug: string;
                taxonomySlug: string;
                cityUfi: number;
                cityName: string;
                countryCode: string;
              },
              index: number
            ) => {
              return <ActivityCard key={index} {...item} />;
            }
          )
        : ""}
    </div>
  );
}
