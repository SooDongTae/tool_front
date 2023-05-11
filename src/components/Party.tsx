import { PartyProps } from "@/types/Party.type";
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
          {studentNum}
          {" "}
          {owner}
        </span>
        <span className="text-sm  font-semibold h-[2rem]">{`${currentPeople}/${maxPeople} (${Math.floor(
          (currentPeople / maxPeople) * 100
        )}%)`}</span>
        <div className="w-full h-[1rem] rounded-[20px] border-[1px]">
          <div
            className={` rounded-l-[20px] h-full bg-GreenLight-30`}
            style={{ width: `calc(100%/${maxPeople}*${currentPeople})` }}
          ></div>
        </div>
        <div className="flex flex-row justify-between mt-[0.5rem]">
          <span className="text-xs text-GrayScale-30 font-bold">{endDate}</span>
          <span className=" text-lg font-bold">{price}원</span>
        </div>
      </div>
    </div>
  );
};
