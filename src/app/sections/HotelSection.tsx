import HotelSectionIcon from "../assets/icons/HotelSectionIcon";
import AppButton from "../components/bits/AppButton";
import HotelCard from "../components/HotelCard";

export default function HotelSection() {
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
      <HotelCard />
      <HotelCard />
    </div>
  );
}
