import Image from "next/image";
import React from "react";
import ImgSrc from "../../public/12.png";

const ProfileView = () => {
  return (
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
        <span className="text-[1.3rem] text-[#777]">taehyun5820@gmail.com</span>
      </div>
      <div className="mt-[12%]">
        <div className="text-[2.3rem] border-b-[0.2rem] border-GreenLight-30">
          내 프로필
        </div>
        <div className="text-[2.3rem] mt-[12%]">결제 내역</div>
      </div>
    </div>
  );
};

export default ProfileView;
