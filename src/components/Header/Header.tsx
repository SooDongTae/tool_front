import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "../GroupBuy/Tab";
import Symbol from "../../asset/tool.svg";
import { HeaderText } from "./HeaderText";
import useUser from "@/hooks/user/useUser";
import { NameConverter } from "../Shared/NameConverter";
export const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  const { isLogged, user, logout, isLoading } = useUser();
  return (
    <div className="w-full h-[6rem] fixed shadow-md bg-[white] z-50 flex justify-center items-center">
      {path === "/groupbuy/[id]" ? <Tab></Tab> : ""}
      {path === "/question/[id]" ? <Tab></Tab> : ""}
      <div className="w-[75rem]  flex flex-row items-center justify-between">
        <div className="h-[4rem] flex flex-row items-center">
          <Link href="/">
            <Symbol />
          </Link>
          <HeaderText target="/" text="공동구매" />
          <HeaderText target="/community" text="커뮤니티" />
          {isLogged ? <HeaderText target="/profile" text="마이페이지" /> : null}
        </div>
        {isLogged ? (
          <div className="flex flex-row">
            <span className="text-[1.1rem] whitespace-nowrap font-bold">
              <NameConverter
                grade={user?.grade}
                class_no={user?.classNo}
                student_no={user?.stuNo}
                owner={user?.name}
              />
            </span>
            <div
              className="font-bold text-[1.1rem] cursor-pointer ml-[2rem] hover:text-GrayScale-40"
              onClick={logout}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <HeaderText
            target={
              process.env.NEXT_PUBLIC_LOGIN_API_KEY
                ? process.env.NEXT_PUBLIC_LOGIN_API_KEY
                : ""
            }
            text="로그인"
          />
        )}
      </div>
    </div>
  );
};
