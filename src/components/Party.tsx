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
}: PartyProps) => {
  return (
    <div className="w-full h-[16rem] rounded-[10px] border-[1px] border-GrayScale-20 flex justify-center items-center shadow-[rgba(0,_0,_0,_0.1)_0px_4px_16px_0px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_7px_16px_0px] hover:translate-y-[-.6rem] duration-300 cursor-pointer hover:border-GreenLight-30 ">
      <div className="w-[85%] h-[90%] flex flex-col">
        <div className="text-3xl font-semibold w-full text-omit h-[2.5rem]">
          {title}
        </div>
        <span className="text-xs font-bold text-GrayScale-20 h-[7rem]">
          {grade}
          {classNum}
          {studentNum < 10 ? "0" : null}
          {studentNum} {owner}
        </span>
        <ProgressBar
          width="full"
          height="[1rem]"
          maxi={maxPeople}
          current={currentPeople}
        />
        <span className="text-sm  font-semibold h-[2rem]">{`${currentPeople}/${maxPeople} (${Math.floor(
          (currentPeople / maxPeople) * 100
        )}%)`}</span>
        <div className="flex flex-row justify-between mt-[0.5rem]">
          <span className="text-xs text-GrayScale-30 font-bold">
            {endDate.substring(0, 10)}
          </span>
          <span className=" text-lg font-bold">{price}원</span>
        </div>
      </div>
    </div>
  );
};
