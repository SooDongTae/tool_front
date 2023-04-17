import { Party } from "@/components/Party";
import { PartyProps } from "@/types/Party";
import Link from "next/link";
const TestData: PartyProps = {
  title: "파티 제목을 적어",
  subtitle: "파티의 설명을 적어",
  reserve: [true, true, false, false],
  price: 50000,
  endDate: "2023.04.01",
};
export const MainPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center pt-[8.5rem]">
      <div className="w-[75rem]">
        <div className="w-full h-[18rem] rounded-[2rem] bg-BlueLight-20"></div>
        <div className="w-full h-[2.5rem] flex justify-between mt-8">
          <div className="grid grid-cols-4 h-full w-[60%] gap-8">
            <div className="button-layout bg-GrayScale-20 ">카테고리</div>
            <div className="button-layout bg-GrayScale-20">카테고리1</div>
            <div className="button-layout bg-GrayScale-20">카테고리2</div>
            <div className="button-layout bg-GrayScale-20">카테고리3</div>
          </div>
          <Link href="/create">
            <div className="w-[8rem] button-layout text-GreenLight-30 hover:bg-GreenLight-30 bg-[white] hover:text-[white] border-[.5px] border-[GreenLight-30]">
              파티 만들기
            </div>
          </Link>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 mt-[2rem] gap-y-[4rem]">
          <Party {...TestData} />
          <Party {...TestData} />
          <Party {...TestData} />
          <Party {...TestData} />
        </div>
      </div>
    </div>
  );
};
