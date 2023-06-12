import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/context/userState";
import { useRouter } from "next/router";
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
        <Link href={"/mygroupbuy"}>
          <div className="w-[30rem] h-[5rem] bg-GreenLight-30 rounded-[10px] mt-[2%] cursor-pointer hover:translate-x-[.6rem] duration-300">
            <p className="p-[3%] font-semibold text-white">내가 만든 파티</p>
          </div>
        </Link>
        <Link href={"/history"}>
          <div className="w-[30rem] h-[5rem] bg-GreenLight-30 rounded-[10px] mt-[1%] cursor-pointer hover:translate-x-[.6rem] duration-300">
            <p className="p-[3%] font-semibold text-white">나의 참여 내역</p>
          </div>
        </Link>
        <Link href={"/requests"}>
          <div className="w-[30rem] h-[5rem] bg-GreenLight-30 rounded-[10px] mt-[1%] cursor-pointer hover:translate-x-[.6rem] duration-300">
            <p className="p-[3%] font-semibold text-white">받은 참여 요청</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
