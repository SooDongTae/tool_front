import React from "react";

const HistoryPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-[75rem] h-full flex flex-col justify-start mt-[12rem]">
        <h2 className="text-[2rem] font-semibold">
          <span className="text-GreenLight-30">My</span> 결제/환불 내역
        </h2>
        <div className="w-full mt-[2rem] ">
          <div className="w-full h-[5rem] bg-GrayScale-15 border-r-0 border-l-0 border-b-0 border-t-GreenLight-30 border-[0.3rem] flex flex-row items-center">
            <div className="w-[16%] history-content">진행날짜</div>
            <div className="w-[28%] history-content">서비스명</div>
            <div className="w-[14%] history-content">결제 금액</div>
            <div className="w-[14%] history-content">입금액</div>
            <div className="w-[14%] history-content">환불금액</div>
            <div className="w-[14%] text-center text-[1.3rem]">현재 상태</div>
          </div>

          <div className="history-box">
            <div className="w-[16%] history-content">진행날짜</div>
            <div className="w-[28%] history-content">서비스명</div>
            <div className="w-[14%] history-content">결제 금액</div>
            <div className="w-[14%] history-content">입금액</div>
            <div className="w-[14%] history-content">환불금액</div>
            <div className="w-[14%] text-center text-[1.3rem]">현재 상태</div>
          </div>
          <div className="history-box">
            <div className="w-[16%] history-content">진행날짜</div>
            <div className="w-[28%] history-content">서비스명</div>
            <div className="w-[14%] history-content">결제 금액</div>
            <div className="w-[14%] history-content">입금액</div>
            <div className="w-[14%] history-content">환불금액</div>
            <div className="w-[14%] text-center text-[1.3rem]">현재 상태</div>
          </div>
          <div className="history-box">
            <div className="w-[16%] history-content">진행날짜</div>
            <div className="w-[28%] history-content">서비스명</div>
            <div className="w-[14%] history-content">결제 금액</div>
            <div className="w-[14%] history-content">입금액</div>
            <div className="w-[14%] history-content">환불금액</div>
            <div className="w-[14%] text-center text-[1.3rem]">현재 상태</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
