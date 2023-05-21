import { PartyProps } from "@/types/Party.type";
import { ProgressBar } from "./ProgressBar";
export const Party = ({
  title,
  maxPeople,
  currentPeople,
  price,
  endDate,
  owner,
  grade,
  studentNum,
  classNum,
  imgSrc,
}: PartyProps) => {
  console.log(imgSrc);
  return (
    <div className="bg-white w-full h-[22rem] rounded-[10px]  border-GrayScale-20  shadow-[rgba(0,_0,_0,_0.1)_0px_4px_16px_0px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_7px_16px_0px] hover:translate-y-[-.6rem] duration-300 cursor-pointer  flex items-center flex-col">
      <img
        src={imgSrc.substring(21)}
        className="w-full h-[12rem] rounded-t-[9px] object-cover"
      />
      <div className="w-[80%] flex flex-col">
        <div className="flex ">
          <div className="font-semibold text-2xl mt-2">{title}</div>
        </div>
        <div className="text-xs text-GrayScale-40 ">
          {grade}
          {classNum}
          {studentNum < 10 ? 0 : null}
          {studentNum} {owner}
        </div>
        <div className="mt-6">
          <span className="text-sm">
            {(currentPeople / maxPeople) * 100}% ({currentPeople}/{maxPeople})
          </span>
          <ProgressBar
            maxi={maxPeople}
            current={currentPeople}
            width="full"
            height="1rem"
            color="GreenLight-30"
          />
        </div>
        <div className="text-GreenLight-30 font-semibold mt-2">
          {price.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};
