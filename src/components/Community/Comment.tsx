import { IComment } from "@/types/Community.type";
import { NameConverter } from "../Shared/NameConverter";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
export const Comment = ({
  grade,
  student_no,
  class_no,
  owner,
  content,
  createdAt,
}: IComment) => {
  return (
    <div className="border-b-GrayScale-30 border-b-[.5px] pt-8 pb-8">
      <div className=" flex flex-row items-center">
        <Image
          src={"/12.png"}
          className="w-[4rem] h-[4rem] object-cover rounded-full"
          alt="댓글 프로필 이미지"
          width={100}
          height={100}
        />
        <div className="flex flex-col ml-4">
          <span className="font-bold">
            <NameConverter
              grade={grade}
              student_no={student_no}
              class_no={class_no}
              owner={owner}
            />
          </span>
          <span className="text-GrayScale-30 text-sm">2022-12-11</span>
        </div>
      </div>
      <div className="mt-4 text-lg">{content}</div>
      <div className="flex flex-row items-center text-GreenLight-30 font-bold mt-2">
        <AiOutlinePlusCircle />
        <span className="ml-2">{1}개의 답글</span>
      </div>
    </div>
  );
};
