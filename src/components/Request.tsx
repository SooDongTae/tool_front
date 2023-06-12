import useApprove from "@/hooks/request/useApprove";
import { IRequest } from "@/types/Request.type";
import React from "react";

const Request = (props: IRequest) => {
  const { mutate } = useApprove();
  return (
    <div className="w-[48%] h-[5rem] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[15px] mb-[1rem] flex flex-row justify-evenly items-center">
      <img
        className="rounded-full w-[3rem] h-[3rem]"
        src={
          props.userProfile
            ? props.userProfile
            : "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg"
        }
        alt="프로필 사진"
      />
      <p className="text-[1.3rem] w-[50%] font-semibold">
        {props.grade}
        {props.classNo}
        {props.studentNo} {props.userName}
      </p>
      <div
        onClick={() => mutate(props.id)}
        className="w-[4rem] h-[2rem] rounded-full bg-GreenLight-30 text-center leading-[2rem] text-white cursor-pointer"
      >
        수락
      </div>
      <div className="w-[4rem] h-[2rem] rounded-full bg-GrayScale-20 text-center leading-[2rem] text-white font-semibold cursor-pointer">
        거절
      </div>
    </div>
  );
};

export default Request;
