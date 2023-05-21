import { groupId } from "@/context/selectedGroupState";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";

const Tab = () => {
  const grpId = useRecoilValue(groupId);
  const path = useRouter().pathname;
  return (
    <div className="absolute w-[17rem] h-full left-[43%]">
      <div className="w-full h-full relative flex flex-row items-center">
        <Link className="block w-[50%]" href={`/groupbuy/${grpId}`}>
          <div
            className={`w-full text-center ${
              path === "/groupbuy/[id]" ? "text-GreenLight-30" : ""
            }`}
          >
            공동구매
          </div>
        </Link>
        <Link className="block w-[50%]" href={`/question/${grpId}`}>
          <div
            className={`w-full text-center ${
              path === "/question/[id]" ? "text-GreenLight-30" : ""
            }`}
          >
            질문
          </div>
        </Link>
        <div
          className={`w-[50%] h-[0.2rem] bg-GreenLight-30 absolute bottom-0 ${
            path === "/groupbuy/[id]" ? "left-0" : "left-[50%]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Tab;
