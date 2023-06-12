import React from "react";

const RequestPage = () => {
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
          <div className="w-[48%] h-[5rem] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[15px] mb-[1rem] flex flex-row justify-evenly items-center">
            <img
              className="rounded-full w-[3rem] h-[3rem]"
              src="https://avatars.githubusercontent.com/u/80657114?s=40&v=4"
              alt="프로필 사진"
            />
            <p className="text-[1.3rem] w-[50%] font-semibold">3111 이태현</p>
            <div className="w-[4rem] h-[2rem] rounded-full bg-GreenLight-30 text-center leading-[2rem] text-white">
              수락
            </div>
            <div className="w-[4rem] h-[2rem] rounded-full bg-GrayScale-20 text-center leading-[2rem] text-white font-semibold">
              거절
            </div>
          </div>
          <div className="w-[48%] h-[5rem] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[15px] mb-[1rem] flex flex-row justify-evenly items-center">
            <img
              className="rounded-full w-[3rem] h-[3rem]"
              src="https://avatars.githubusercontent.com/u/80657114?s=40&v=4"
              alt="프로필 사진"
            />
            <p className="text-[1.3rem] w-[50%] font-semibold">3111 이태현</p>
            <div className="w-[4rem] h-[2rem] rounded-full bg-GreenLight-30 text-center leading-[2rem] text-white cursor-pointer">
              수락
            </div>
            <div className="w-[4rem] h-[2rem] rounded-full bg-GrayScale-20 text-center leading-[2rem] text-white font-semibold cursor-pointer">
              거절
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
