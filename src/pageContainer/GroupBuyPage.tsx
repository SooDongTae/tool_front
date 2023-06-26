import LeftTime, { GetLeftTime } from "@/components/Shared/LeftTime";
import { ProgressBar } from "@/components/Shared/ProgressBar";
import { IGroupBuy, IParticipant } from "@/types/GroupBuy.type";
import Image from "next/image";
import { useQueryClient } from "react-query";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import usePartyMutation from "@/hooks/useJoin";
import { useRecoilValue } from "recoil";
import { userState } from "@/context/userState";
import { IUser } from "@/types/User.type";

const GroupBuyPage = ({ party }: { party: IGroupBuy }) => {
  const user = useRecoilValue(userState);
  const [modalOpened, setModalOpened] = useState(false);
  const [onMouseDown, setOnMouseDown] = useState({
    close: false,
    submit: false,
  });
  const [leftTime, setLeftTime] = useState({
    leftDay: 0,
    leftHour: 0,
    leftMinute: 0,
  });
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["party"]);
    if (party) {
      const { leftDay, leftHour, leftMinute } = GetLeftTime(party.untilAt);
      setLeftTime({
        leftDay: leftDay,
        leftHour: leftHour,
        leftMinute: leftMinute,
      });
    }
  }, [party]);
  setInterval(() => {
    const { leftDay, leftHour, leftMinute } = GetLeftTime(party?.untilAt);
    setLeftTime({
      leftDay: leftDay,
      leftHour: leftHour,
      leftMinute: leftMinute,
    });
  }, 60000);
  const { mutate } = usePartyMutation(party?.id);

  const isParticipant = (user: IUser, participants: [IParticipant]) => {
    let flag = false;
    participants?.forEach((par) => {
      if (
        user.grade === par.grade &&
        user.classNo === par.ban &&
        user.stuNo === par.num
      )
        flag = true;
    });
    return flag;
  };

  return (
    <div className="relative  h-auto flex justify-center pt-[10rem] bg-Background-Gray">
      <div className="w-[55rem] h-full flex flex-col">
        <img
          src={party?.imgSrc}
          className="w-full h-[600px] object-contain"
          alt="공동구매 이미지"
        />
        <div className="flex flex-row justify-between items-center border-b-[0.1rem] border-GrayScale-20">
          <div className="text-3xl text-GreenLight-30 font-bold">
            {party?.grade}
            {party?.class_no}
            {party?.student_no > 9
              ? party?.student_no
              : "0" + party?.student_no}{" "}
            {party?.owner}
          </div>
          <div className="flex flex-col items-end justify-between h-[6rem]">
            <div className="text-GreenLight-30 p-[0.5rem]">
              {party?.ownerRating}등급
            </div>
            <div className="w-[10rem] h-[0.8rem] rounded-[20px] border-[1px] border-GrayScale-20 pr-[0.5rem]">
              <div
                className={`bg-GreenLight-30 rounded-l-[20px] rounded-r-[20px] h-full`}
                style={{ width: `calc(100%/5*${6 - 2})` }}
              ></div>
            </div>
            <div className="text-GrayScale-30 p-[0.5rem]">신용등급</div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full flex flex-row items-center mt-[3%]">
            <h2 className="text-[2.3rem] font-semibold whitespace-nowrap mr-[3%]">
              {party?.title}
            </h2>
            <LeftTime leftTime={leftTime} />
            <span className="text-3xl w-[20%] text-end">
              {party?.cost.toLocaleString()}원
            </span>
          </div>
          <p className="w-[60%] text-2xl text-GrayScale-30 mr-[40%] mt-[5%]">
            {party?.content}
          </p>
          <div className="flex flex-col justify-between w-full h-[8rem] mt-[5%]">
            <div className="text-2xl">
              {party?.currentPeople}/{party?.maxPeople}(
              {((party?.currentPeople / party?.maxPeople) * 100).toFixed(2)}%)
            </div>
            <ProgressBar
              width="full"
              height="2rem"
              maxi={party?.maxPeople}
              current={party?.currentPeople}
              color="BlueLight-20"
            />
            <div className="text-GreenLight-30 text-2xl cursor-pointer">
              참여자 리스트 보기
            </div>
          </div>
          <div
            onClick={() => {
              if (!isParticipant(user, party?.participantResponses))
                setModalOpened(true);
            }}
            className={`w-[15rem] h-[3rem] ${
              !isParticipant(user, party?.participantResponses)
                ? "bg-GreenLight-30 hover:bg-GreenDark-30 cursor-pointer"
                : "bg-GrayScale-20"
            }  m-[5%] text-white rounded-[10rem] text-center text-2xl items-center justify-center flex duration-300`}
          >
            {isParticipant(user, party?.participantResponses)
              ? "참여 대기중.."
              : "참여하기"}
          </div>
        </div>
      </div>
      <ReactModal
        className="fixed top-[35%] left-[35%] w-[30%] h-[30%] bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] flex flex-col focus:outline-none"
        isOpen={modalOpened}
        onAfterClose={() => setModalOpened(false)}
      >
        <div className="w-full h-[20%] border-b-[0.1rem] border-GrayScale-15 flex flex-row justify-between items-center text-[1.3rem] pl-[3%]">
          <span>
            {party?.title} / {party?.owner}
          </span>
          <div
            className={`w-[2.3rem] h-[2.3rem] mr-[3%] ${
              onMouseDown.close ? "bg-GrayScale-20" : "bg-GrayScale-15"
            } rounded-[10px] flex justify-center items-center`}
          >
            <IoCloseOutline
              size={30}
              color={onMouseDown.close ? "black" : "grey"}
              onMouseDown={() =>
                setOnMouseDown({ ...onMouseDown, close: true })
              }
              onMouseUp={() => setOnMouseDown({ ...onMouseDown, close: false })}
              onClick={() => setModalOpened(false)}
            />
          </div>
        </div>
        <div className="w-full h-[55%] border-b-[0.1rem] border-GrayScale-15 flex flex-col justify-center items-center">
          {/* <img src={party.imgSrc.substring(21)} className="w-[4rem]" /> */}
          <span className="text-[1.8rem]">{party?.title}</span>
          <p className="text-GrayScale-40">
            {party?.content.length > 30
              ? party?.content.substring(0, 30) + "..."
              : party?.content}
          </p>
        </div>
        <div className="w-full h-[25%] flex justify-center items-center">
          <div
            onClick={() => mutate()}
            onMouseDown={() => setOnMouseDown({ ...onMouseDown, submit: true })}
            onMouseUp={() => setOnMouseDown({ ...onMouseDown, submit: false })}
            className={`${
              onMouseDown.submit ? "bg-GreenDark-30" : "bg-GreenLight-30"
            } w-[95%] h-[60%] rounded-[10px] text-white flex justify-center items-center cursor-pointer duration-200`}
          >
            {isParticipant(user, party?.participantResponses)
              ? "참여 대기중.."
              : "공동구매 참여하기"}
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default GroupBuyPage;
