import { RemoveUserToken } from "@/api/User/removeUserToken";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  return (
    <div className="w-full h-[6rem] fixed shadow-xl bg-[white] z-50 flex justify-center items-center">
      <div className="w-[75rem]  flex flex-row items-center justify-between">
        <div className="w-[10rem] h-[4rem] flex justify-between flex-row">
          <div className="w-[4rem] h-full bg-GreenLight-30 mr-[2rem]" />
          <Link href="/community">
            <div className="w-[4rem] h-full leading-[4rem]">커뮤니티</div>
          </Link>
        </div>
        <button
          onClick={() => {
            RemoveUserToken();
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
