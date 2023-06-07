import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "../GroupBuy/Tab";
import Symbol from "../../asset/tool.svg";
import { HeaderText } from "./HeaderText";
import useUser from "@/hooks/user/useUser";
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
            <HeaderText
              target=""
              text={
                user?.grade.toString() +
                user?.classNo.toString() +
                (user?.stuNo < 10 ? "0" : "") +
                user?.stuNo.toString() +
                " " +
                user?.name
              }
              ml=""
            />
            <div
              className="font-bold text-[1.1rem] cursor-pointer ml-[2rem]"
              onClick={logout}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <HeaderText
            target="https://auth.bssm.kro.kr/oauth?clientId=98fd44ad&redirectURI=http://localhost:3000/oauth"
            text="로그인"
          />
        )}
      </div>
    </div>
  );
};
