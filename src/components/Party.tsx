import { PartyProps } from "@/types/Party";

export const Party = ({
  title,
  subtitle,
  reserve,
  price,
  endDate,
}: PartyProps) => {
  return (
    <div className="w-full h-[16rem] rounded-[10px] border-[1px] border-GrayScale-20 flex justify-center items-center">
      <div className="w-[85%] h-[90%] flex flex-col">
        <div className="text-3xl font-semibold w-full text-omit">{title}</div>
        <div className="w-full text-2xl text-GrayScale-30">HIHI</div>
      </div>
    </div>
  );
};
