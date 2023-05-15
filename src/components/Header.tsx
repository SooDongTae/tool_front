import UserAPI from "@/api/User";
import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "./Tab";
export const Header = () => {
  const path = useRouter().pathname;
  return (
    <div className="w-full h-[6rem] fixed shadow-xl bg-[white] z-50 flex justify-center items-center">
      {path === "/groupbuy" ? <Tab></Tab> : ""}
      {path === "/question" ? <Tab></Tab> : ""}
      <div className="w-[75rem]  flex flex-row items-center justify-between">
        <div className="w-[10rem] h-[4rem] flex justify-between flex-row">
          <Link href="/">
            <div className="w-[4rem] h-full bg-GreenLight-30 mr-[2rem]" />
          </Link>
          <Link href="/community">
            <div className="w-[4rem] h-full leading-[4rem]">커뮤니티</div>
          </Link>
        </div>
        <button
          onClick={() => {
            UserAPI.RemoveUserToken();
          }}
        >
          로그아웃
        </button>
        <Link href="https://auth.bssm.kro.kr/oauth?clientId=98fd44ad&redirectURI=http://localhost:3000/oauth">
          <button>로그인</button>
        </Link>
      </div>
    </div>
  );
};
