import UserAPI from "@/api/User";
import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "./Tab";
import { HeaderText } from "./HeaderText";
import { useQuery } from "react-query";
import { useMemo } from "react";
export const Header = () => {
  const router = useRouter();
  const userQuery = useQuery(
    ["user"],
    () => UserAPI.GetUserName(localStorage.getItem("accessToken"))
    // { enabled:  !!localStorage.getItem("accessToken") }
  );
  const userName = useMemo(
    () =>
      userQuery.data?.grade.toString() +
        userQuery.data?.classNo.toString() +
        (userQuery.data?.stuNo < 10 ? "0" : "") +
        userQuery.data?.stuNo.toString() +
        userQuery.data?.name || "",
    [userQuery]
  );
  const path = useRouter().pathname;
  return (
    <div className="w-full h-[6rem] fixed shadow-md bg-[white] z-50 flex justify-center items-center">
      {path === "/groupbuy" ? <Tab></Tab> : ""}
      {path === "/question" ? <Tab></Tab> : ""}
      <div className="w-[75rem]  flex flex-row items-center justify-between">
        <div className="h-[4rem] flex justify-between flex-row items-center">
          <Link href="/">
            <div className="h-[4rem] w-[4rem] bg-GreenLight-30 " />
          </Link>
          <HeaderText target="/" text="공동구매" />
          <HeaderText target="/community" text="커뮤니티" />
          {/* <HeaderText target="" text="중고거래" /> */}
        </div>
        {userName ? (
          <HeaderText target="" text={userName} />
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
