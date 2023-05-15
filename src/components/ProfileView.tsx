import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProfileView = () => {
  return (
    <div className="w-[30%] h-[calc(100vh-6rem)] pt-[7rem] flex flex-col items-center justify-start">
      <h2 className="text-[2.5rem] font-semibold">
        <span className="text-GreenLight-30">My</span> 페이지
      </h2>
      <div className="flex flex-col items-center justify-evenly mt-[12%]">
        <Image
          className="rounded-full"
          width={200}
          height={200}
          src={"/12.png"}
          alt="프로필 사진"
        />
        <span className="text-[2rem]">태현</span>
        <span className="text-[1.3rem] text-[#777]">taehyun5820@gmail.com</span>
      </div>
      <div className="mt-[12%] flex flex-col">
        <div className="text-4xl mt-[2rem]">
          <Link href={"/profile"}>내 프로필</Link>
        </div>
        <div className="text-4xl mt-[2rem]">
          <Link href={"/history"}>결제 내역</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
