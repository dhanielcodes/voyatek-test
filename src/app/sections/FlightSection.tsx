import FlightIcon from "../assets/icons/FlightIcon";
import AppButton from "../components/bits/AppButton";
import FlightCard from "../components/FlightCard";

export default function FlightSection() {
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
      <FlightCard />
      <FlightCard />
    </div>
  );
}
