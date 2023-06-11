import { IGroupBuy, IHistory } from "@/types/GroupBuy.type";
import React from "react";

const HistoryBox = ({ untilAt, title, cost, status }: IHistory) => {
  return (
    <div className="history-box">
      <div className="w-[20%] history-content">
        {untilAt.toString().substring(0, 10)}
      </div>
      <div className="w-[40%] history-content">{title}</div>
      <div className="w-[20%] history-content">{cost}원</div>
      <div className="w-[20%] text-center text-[1.3rem]">
        {status === "activated"
          ? "진행중"
          : status === "canceled"
          ? "취소됨"
          : "완료"}
      </div>
    </div>
  );
};

export default HistoryBox;
