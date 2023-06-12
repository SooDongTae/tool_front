import HistoryBox from "@/components/Profile/HistoryBox";
import ProfileView from "@/components/Profile/ProfileView";
import useHistory from "@/hooks/useHistory";
import useMyGroupBuy from "@/hooks/useMyGroupBuy";
import { IGroupBuy, IHistoryList } from "@/types/GroupBuy.type";
import { PartyProps } from "@/types/Party.type";
import React from "react";

const HistoryPage = () => {
  const { history, isLoading }: { history: IHistoryList; isLoading: boolean } =
    useHistory();
  const historyList = history?.groupBuyingResponseList;
  return (
    <div className="w-screen h-screen flex flex-row justify-between bg-Background-Gray">
      {/* <ProfileView /> */}
      <div className="w-full h-screen flex flex-col items-center bg-[#fafafa] overflow-scroll">
        <div className="w-full h-full flex flex-col items-center justify-start mt-[10rem]">
          <h2 className="w-[65%] text-[2rem] font-semibold text-left">
            <span className="text-GreenLight-30">My</span> 참여 내역
          </h2>
          <div className="w-[70%] h-full mt-[2rem]">
            <div className="w-full h-[5rem] bg-GrayScale-15 border-r-0 border-l-0 border-b-0 border-t-GreenLight-30 border-[0.3rem] flex flex-row items-center">
              <div className="w-[20%] history-content">진행날짜</div>
              <div className="w-[40%] history-content">서비스명</div>
              <div className="w-[20%] history-content">결제 금액</div>
              <div className="w-[20%] text-center text-[1.3rem]">현재 상태</div>
            </div>
            {historyList?.length < 1 ? (
              <div className="w-full h-[5rem] text-[1.3rem] flex justify-center items-center">
                아직 참여 내역이 없습니다.
              </div>
            ) : (
              historyList?.map((data: IGroupBuy) => (
                <HistoryBox
                  untilAt={data.untilAt}
                  title={data.title}
                  cost={data.cost}
                  status={data.status}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
