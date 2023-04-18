import Image from "next/image";
import React from "react";
import ImgSrc from "../../public/12.png";
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[35%] h-full flex flex-col items-center justify-start shadow-2xl shadow-[#777] pt-[3%] z-10">
        <h2 className="text-[2.5rem] font-semibold">
          <span className="text-GreenLight-30">My</span> 페이지
        </h2>
        <div className="flex flex-col items-center justify-evenly mt-[12%]">
          <Image
            className="rounded-full"
            width={200}
            height={200}
            src={ImgSrc}
            alt="프로필 사진"
          />
          <span className="text-[2rem]">태현</span>
          <span className="text-[1.3rem] text-[#777]">
            taehyun5820@gmail.com
          </span>
        </div>
        <div className="mt-[12%]">
          <div className="text-[2.3rem] border-b-[0.2rem] border-GreenLight-30">
            내 프로필
          </div>
          <div className="text-[2.3rem] mt-[12%]">결제 내역</div>
        </div>
      </div>
      <div className="w-[65%] h-full flex flex-col justify-evenly items-center bg-[#fafafa] ">
        <div className="profile-box p-[4%]">
          <div className="flex flex-row items-center border-b-[0.1rem] border-b-GrayScale-20 pb-[2%]">
            <Image
              className="rounded-full"
              width={80}
              height={80}
              src={ImgSrc}
              alt="프로필 사진"
            />
            <div className="flex flex-col ml-[5%]">
              <span className="text-[1.5rem] font-semibold">태현</span>
              <span className="text-[1rem] text-[#777]">
                taehyun5820@gmail.com
              </span>
            </div>
          </div>
          <div className="profile-flex-box border-b-[0.1rem] border-GrayScale-20">
            <div className="profile-info-box">
              <SlScreenSmartphone size={35} />
              <span className="text-[1.2rem] ml-[4%]">010-5820-7262</span>
            </div>
            <div className="profile-modify-btn">수정</div>
          </div>
          <div className="profile-flex-box">
            <div className="profile-info-box">
              <TfiEmail size={33} />
              <span className="text-[1.2rem] ml-[4%]">
                taehyun5820@gmail.com
              </span>
            </div>
            <div className="profile-modify-btn">수정</div>
          </div>
        </div>
        <div className="profile-box p-[4%]">
          <p className="text-[1.5rem] border-b-[0.1rem] border-GrayScale-20">
            <span className="text-GreenLight-30">My</span> 신용등급
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
