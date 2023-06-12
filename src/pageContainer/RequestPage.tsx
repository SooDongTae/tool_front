import Request from "@/components/Request";
import useRequest from "@/hooks/request/useRequest";
import { IRequest, IRequestList } from "@/types/Request.type";
import React from "react";

const RequestPage = () => {
  const {
    requests,
    isLoading,
  }: { requests: IRequestList; isLoading: boolean } = useRequest();
  const requestList = requests?.joinRequestResponses;
  console.log(requestList);
  return (
    <div className="w-screen h-screen flex flex-row justify-between bg-Background-Gray">
      {/* <ProfileView /> */}
      <div className="w-full h-screen flex flex-col items-center bg-[#fafafa] overflow-scroll">
        <div className="w-full flex flex-col items-center justify-start pt-[10rem]">
          <h2 className="w-[70%] text-[2rem] font-semibold text-left">
            <span className="text-GreenLight-30">My</span> 참가 요청
          </h2>
        </div>
        <div className="w-[70%] flex flex-row flex-wrap justify-between mt-[2rem]">
          {requestList?.map((request, idx: number) => (
            <Request {...request} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
