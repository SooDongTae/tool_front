import { PartyProps } from "@/types/Party";

export const Party = ({
  title,
  subtitle,
  reserve,
  price,
  endDate,
}: PartyProps) => {
  const Reserving = reserve.map((item, idx) => {
    return (
      <div
        className={`w-[2rem] h-[2rem] rounded-[10px] ${
          item ? "bg-GrayScale-30" : "bg-GrayScale-10"
        }`}
      />
    );
  });
  return (
    <div className="w-full h-[16rem] rounded-[10px] border-[1px] flex justify-center items-center">
      <div className="w-[85%] h-[90%] flex flex-col">
        <div className="text-3xl font-semibold w-full text-omit">{title}</div>
        <div className="text-xl text-GrayScale-20 h-[6.5rem] overflow-hidden">{subtitle}</div>
        <div className={`grid grid-cols-${reserve.length} mt-[.5rem] w-1/2`}>
          {Reserving}
        </div>
        <div className="flex justify-between items-center mt-[1rem]">
          <div className="text-GrayScale-20 text-[.75rem]">~{endDate}</div>
          <div className="font-bold text-xl">{price}원</div>
        </div>
      </div>
    </div>
  );
};
