import { ProgressType } from "@/types/ProgressBar.type";

export const ProgressBar = ({ maxi, current, width, height }: ProgressType) => {
  return (
    <div className={`w-${width} h-${height} rounded-[20px] border-[1px]`}>
      <div
        className={` rounded-l-[20px] h-full bg-GreenLight-30`}
        style={{ width: `calc(100%/${maxi}*${current})` }}
      ></div>
    </div>
  );
};
