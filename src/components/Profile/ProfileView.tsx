import { userState } from "@/context/userState";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";

const ProfileView = () => {
  const user = useRecoilValue(userState);
  const path = useRouter().pathname;
  return (
    <div className="w-[35%] h-[100vh] pt-[7rem] flex flex-col items-center justify-start bg-white">
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
        <span className="text-[2rem] font-semibold">{user.name}</span>
        <span className="text-[1.3rem] text-[#777]">taehyun5820@gmail.com</span>
      </div>
      <div className="relative mt-[12%] h-[20%] flex flex-col justify-evenly">
        <div
          className={`text-4xl ${path === "/profile" ? "font-semibold" : ""}`}
        >
          <Link href={"/profile"}>내 프로필</Link>
        </div>
        <div
          className={`text-4xl ${path === "/history" ? "font-semibold" : ""}`}
        >
          <Link href={"/history"}>결제 내역</Link>
        </div>
        <div
          className={`w-[0.3rem] h-[40%] bg-GreenLight-30 absolute -left-5 ${
            path === "/profile" ? "top-[8%]" : "top-[53%]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProfileView;
