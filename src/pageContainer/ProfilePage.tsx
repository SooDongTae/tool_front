import React from "react";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import ProfileView from "@/components/Profile/ProfileView";
import { useRecoilValue } from "recoil";
import { userState } from "@/context/userState";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const user = useRecoilValue(userState);
  const path = useRouter().pathname;
  console.log(user);
  return (
    <div className="w-full h-full bg-white pt-[8rem]">
      <div className="flex flex-col items-center justify-evenly">
        <img
          className="w-[7rem] h-[7rem] rounded-full"
          src={user.profileUrl}
          alt="프로필 사진"
        />
        <span className="text-[1.5rem] font-[600]">
          {user.grade}
          {user.classNo}
          {user.stuNo} {user.name}
        </span>
        <span className="text-[1rem] text-GrayScale-30">{user.email}</span>
      </div>
      <div className="w-full mt-[1%] flex flex-col items-center">
        <div className="w-[30rem] h-[5rem] bg-GreenLight-30 rounded-[10px] mt-[2%] cursor-pointer hover:translate-x-[.6rem] duration-300">
          <p className="p-[3%] font-semibold text-white">내가 만든 파티</p>
        </div>
        <Link href={"/history"}>
          <div className="w-[30rem] h-[5rem] bg-GreenLight-30 rounded-[10px] mt-[1%] cursor-pointer hover:translate-x-[.6rem] duration-300">
            <p className="p-[3%] font-semibold text-white">나의 참여 내역</p>
          </div>
        </Link>
      </div>
      {/* <div className="relative mt-[12%] h-[20%] flex flex-col justify-evenly">
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
      </div> */}
    </div>
  );
};

export default ProfilePage;
