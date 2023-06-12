import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import axios from "axios";
import { InitUserState, userState } from "@/context/userState";
import { UserType } from "@/types/User.type";
import { customAxios } from "@/lib/axios/customAxios";
const getUser = async () => {
  const { data } = await customAxios.get("/api/auth", {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")})}`,
    },
  });
  return data;
};

const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const {
    data: userInfo,
    remove,
    isLoading,
  } = useQuery(["user"], getUser, {
    retry: 1,
    refetchOnMount: false,
  });

  const logout = () => {
    customAxios.delete("/api/auth/logout", {
      data: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    });
    setUser(InitUserState);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    remove();
  };

  useEffect(
    () => userInfo && setUser(userInfo),
    [router.query, setUser, userInfo]
  );

  return { user , isLogged: !!userInfo, logout, isLoading };
};

export default useUser;
