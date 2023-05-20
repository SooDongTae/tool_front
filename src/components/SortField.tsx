import { IconType } from "react-icons";

export const SortField = ({
  data,
  setData,
  target,
  Icon,
  text,
}: {
  setData: (v: any) => void;
  data: string;
  Icon: any;
  target: string;
  text: string;
}) => {
  return (
    <div
      onClick={() => setData(target)}
      className={`flex flex-row items-center text-lg font-semibold h-full cursor-pointer duration-300 ${
        data === target ? "text-GreenLight-30" : "hover:text-GrayScale-40"
      }`}
    >
      {Icon}
      {text}
    </div>
  );
};
