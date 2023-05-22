import { ILeftTime } from "@/types/GroupBuy.type";
import React from "react";

export const GetLeftTime = (untilAt: Date) => {
  const now = new Date();
  const futureTime = new Date(untilAt);
  const timeDifference = futureTime.getTime() - now.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor(timeDifference / (1000 * 60)) % 60;
  const secondsDifference = Math.floor(timeDifference / 1000) % 60;
  return {
    leftDay: Math.floor(hoursDifference / 24),
    leftHour: hoursDifference % 24,
    leftMinute: minutesDifference,
    leftSecond: secondsDifference,
  };
};

const LeftTime = ({ leftTime }: { leftTime: ILeftTime }) => {
  return (
    <span className="text-[1.3rem] text-GrayScale-40 w-[60%]">
      음식 • {leftTime.leftDay !== 0 ? leftTime.leftDay + "일" : ""}{" "}
      {leftTime.leftHour !== 0 ? leftTime.leftHour + "시간" : ""}{" "}
      {leftTime.leftMinute !== 0 ? leftTime.leftMinute + "분" : ""}{" "}
      {leftTime.leftSecond !== 0 ? leftTime.leftSecond + "초" : ""} 남음
    </span>
  );
};

export default LeftTime;
