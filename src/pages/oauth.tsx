import { NextPageContext } from "next";
import { useEffect } from "react";
import useLoginMutation from "@/hooks/useLogin";
export const OAuth = ({ code }: { code: string }) => {
  const { mutate } = useLoginMutation();
  useEffect(() => {
    mutate();
  }, [mutate]);
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
