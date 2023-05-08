import { GetUserInfo } from "@/api/user/getUserInfo";
import axios from "axios";
import { NextPageContext } from "next";
import { useEffect } from "react";
import { QueryClient, QueryOptions, useQueries, useQuery } from "react-query";

export const useGetUser: any = async (code: string, options: QueryOptions) => {
  const headers = {
    authCode: code,
  };
  const queryKey = "getUser";
  const queryFn = await axios
    .post("/api/auth/oauth/bsm", null, { headers })
    .then((res) => res.data);
  return useQuery([queryKey, code], queryFn, { ...options });
};

export const OAuth = ({ code }: any) => {
  console.log(code);
  const { isLoading, isError, data, error } = useGetUser(code, {});
  console.log(isLoading, isError, data, error);
  return <div></div>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { code } = context.query;
  return { props: { code } };
};

export default OAuth;
