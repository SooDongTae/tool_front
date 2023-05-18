import { NextPageContext } from "next";
import { useEffect } from "react";
import useLoginMutation from "@/hooks/useLogin";
export const OAuth = ({ code }: { code: string }) => {
  const { mutate } = useLoginMutation(code);
  useEffect(() => {
    mutate();
  }, [mutate]);

  return <div></div>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { code } = context.query;
  return {
    props: { code },
  };
};
export default OAuth;
