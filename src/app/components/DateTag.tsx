import {
  ArrowRightIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Tag {
  dateFrom: string;
  dateTo: string;
}

export default function DateTag({ dateFrom, dateTo }: Tag) {
  return (
    <div className="bg-[#FEF4E6] flex items-center gap-1 text-[#7A4504] p-1 w-fit text-[10px]">
      <CalendarDateRangeIcon width={14} /> {dateFrom}{" "}
      <ArrowRightIcon width={14} /> {dateTo}
    </div>
  );
}
