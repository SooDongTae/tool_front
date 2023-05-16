import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import axios from "axios";
import { InitUserState, userState } from "@/context/userState";
import { UserType } from "@/types/User.type";

const getUser = async () => {
  const { data } = await axios.get("/api/auth", {
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
  } = useQuery<UserType>("getUser", getUser, {
    retry: 1,
  });

  const logout = () => {
    axios.delete("/api/auth/logout", {
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

  return { user, isLogged: !!userInfo, logout };
};

export default useUser;
