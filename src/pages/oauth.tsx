import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserAPI from "@/api/User";

export const OAuth = ({ code }: { code: string }) => {
  const router = useRouter();
  useEffect(() => {
    UserAPI.SetUserToken(code);
    router.push("/");
  }, []);
  console.log(code);
  return <div></div>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { code } = context.query;
  return {
    props: { code },
  };
};
export default OAuth;
