import { userState } from "@/context/userState";
import Image from "next/image";
import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { useRecoilValue } from "recoil";
import { ProgressBar } from "../Shared/ProgressBar";

const ProfileInfo = () => {
  const user = useRecoilValue(userState);
  return (
    <div className="w-[65%] h-[calc(100vh-6rem)] mt-[6rem] flex flex-col justify-evenly items-center bg-[#f9f9f9] ">
      <div className="profile-box p-[2%] flex flex-col justify-evenly">
        <div className="flex flex-row items-center border-b-[0.1rem] border-b-GrayScale-20 p-[2%]">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src={"/12.png"}
            alt="프로필 사진"
          />
          <div className="flex flex-col ml-[5%]">
            <span className="text-[1.5rem] font-semibold">{user.name}</span>
            <span className="text-[1rem] text-[#777]">
              taehyun5820@gmail.com
            </span>
          </div>
        </div>
        <div className="profile-flex-box border-b-[0.1rem] p-[2%] border-GrayScale-20">
          <div className="profile-info-box">
            <SlScreenSmartphone size={35} />
            <span className="text-[1.2rem] ml-[4%]">010-5820-7262</span>
          </div>
          <div className="profile-modify-btn">수정</div>
        </div>
        <div className="profile-flex-box p-[2%]">
          <div className="profile-info-box">
            <TfiEmail size={33} />
            <span className="text-[1.2rem] ml-[4%]">taehyun5820@gmail.com</span>
          </div>
          <div className="profile-modify-btn">수정</div>
        </div>
      </div>
      <div className="profile-box flex flex-col justify-evenly p-[4%]">
        <p className="text-[1.5rem] border-b-[0.1rem] border-GrayScale-20">
          <span className="text-GreenLight-30">My</span> 신용등급
        </p>
        <div className="h-[50%] flex flex-col justify-evenly">
          <div className="flex flex-row justify-between">
            <span className="text-[1.2rem]">닉네임</span>
            <span className="text-[1.2rem]">신용등급</span>
          </div>
          <ProgressBar
            width="full"
            height="1.3rem"
            maxi={5}
            current={4}
            color="GreenLight-20"
          />
          <div className="flex flex-row justify-between">
            <span className="text-GrayScale-40">5등급</span>
            <span className="text-GrayScale-40">1등급</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
