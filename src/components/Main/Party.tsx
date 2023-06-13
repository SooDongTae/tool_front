import { PartyProps } from "@/types/Party.type";
import { ProgressBar } from "../Shared/ProgressBar";
import { GetLeftTime } from "../Shared/LeftTime";
export const Party = ({
  grade,
  untilAt,
  title,
  imgSrc,
  class_no,
  student_no,
  owner,
  currentPeople,
  maxPeople,
  cost,
}: PartyProps) => {
  const { leftDay } = GetLeftTime(untilAt);
  return (
    <div className="bg-white h-[22rem] rounded-[10px]  border-GrayScale-20  shadow-[rgba(0,_0,_0,_0.1)_0px_4px_16px_0px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_7px_16px_0px] hover:translate-y-[-.6rem] duration-300 cursor-pointer  flex items-center flex-col">
      <img
        src={imgSrc}
        className="w-full h-[12rem] rounded-t-[9px] object-cover"
      />
      <div className="w-[80%] flex flex-col">
        <div className="flex ">
          <div className="font-semibold text-2xl mt-2 overflow-hidden text-ellipsis whitespace-nowrap break-words">
            {title}
          </div>
        </div>
        <div className="text-xs text-GrayScale-40 ">
          {grade}
          {class_no}
          {student_no < 10 ? 0 : null}
          {student_no} {owner}
        </div>
        <div className="mt-6">
          <span className="text-sm">
            {((currentPeople / maxPeople) * 100).toFixed(2)}% ({currentPeople}/
            {maxPeople})
          </span>
          <ProgressBar
            maxi={maxPeople}
            current={currentPeople}
            width="full"
            height="1rem"
            color="GreenLight-30"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-GreenLight-30 font-semibold mt-2">
            {cost.toLocaleString()}원
          </div>
          <div className="text-xs text-GrayScale-40">
            {leftDay + 1 ? leftDay + 1 + "일 남음" : "오늘 마감"}
          </div>
        </div>
      </div>
    </div>
  );
};
