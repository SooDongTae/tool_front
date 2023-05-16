import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "./Tab";

import { HeaderText } from "./HeaderText";
import { useQueryClient } from "react-query";
import { useState } from "react";
import useUser from "@/hooks/useUser";
export const Header = () => {

  const [clicked, setClicked] = useState(false);
  const queryClinet = useQueryClient();
  const { isLogged, user, logout } = useUser();
  console.log(user);
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
        </div>
        {isLogged ? (
          <div className="relative">
            <div onClick={() => setClicked((prev) => !prev)}>
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
                ml="0"
              />
            </div>
            {clicked ? (
              <div className="absolute top-full left-1/2 translate-x-[-50%] w-[8rem] flex-col shadow-[rgba(0,_0,_0,_0.08)_0px_0px_4px] rounded-[10px] bg-white cursor-pointer">
                <div
                  className="h-[3.5rem] flex justify-center items-center border-b-[1px] border-b-GrayScale-15"
                  onClick={() => setClicked(false)}
              
                >
                  <HeaderText text="마이페이지" target="/profile" ml="0" />
                </div>
                <div
                  className="h-[3.5rem] flex justify-center items-center"
                  onClick={() => {
                    setClicked(false);
                    logout();
                    queryClinet.invalidateQueries(["user"]);
                  }}
                >
                  <HeaderText text="로그아웃" target="" ml="0" />
                </div>
              </div>
            ) : null}
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
