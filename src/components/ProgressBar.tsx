import { ProgressType } from "@/types/ProgressBar.type";

export const ProgressBar = ({
  maxi,
  current,
  width,
  height,
  color,
}: ProgressType) => {
  return (
    <div
      className={`rounded-[20px] border-[1px] `}
      style={{ width: width, height: height }}
    >
      <div
        className={` rounded-l-[20px] h-full bg-${color}`}
        style={{ width: `calc(100%/${maxi}*${current})` }}
      ></div>
    </div>
  );
};
