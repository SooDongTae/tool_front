import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SetUserToken } from "@/api/user/setUserToken";

export const OAuth = ({ code }: { code: string }) => {
  const router = useRouter();
  useEffect(() => {
    SetUserToken(code);
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
