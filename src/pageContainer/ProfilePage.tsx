import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-[75rem] h-full flex flex-col justify-start mt-[12rem]">
        <h2 className="text-[2rem] font-semibold">
          <span className="text-GreenLight-30">My</span> 프로필
        </h2>
        <div className="w-full h-[60%] mt-[2rem] flex flex-row justify-between">
          <div className="w-[47%] h-full border-2">
            <ul className="w-full h-full list-disc ml-[15%] text-[1.3rem] flex flex-col justify-center items-start">
              <li className="m-[1%]">아이디 </li>
              <li className="m-[1%]">연락처</li>
              <li className="m-[1%]">이메일</li>
              <li className="m-[1%]">가입일</li>
            </ul>
          </div>
          <div className="w-[47%] h-full border-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
