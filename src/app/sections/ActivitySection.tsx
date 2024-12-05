import ActivitySectionIcon from "../assets/icons/ActivitySectionIcon";
import ActivityCard from "../components/ActivityCard";
import AppButton from "../components/bits/AppButton";

export default function ActivitySection() {
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
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  );
}
