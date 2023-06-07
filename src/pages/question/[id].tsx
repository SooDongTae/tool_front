import { groupId } from "@/context/selectedGroupState";
import useQuestion from "@/hooks/question/get";
import QuestionPage from "@/pageContainer/QuestionPage";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const question = ({ id }: { id: string }) => {
  const [grpId, setGrpId] = useRecoilState(groupId);
  useEffect(() => {
    setGrpId(id);
  }, []);
  return <QuestionPage id={id} />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  return { props: { id } };
};

export default question;
