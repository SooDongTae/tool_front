import { groupId } from "@/context/selectedGroupState";
import useQuestion from "@/hooks/useQuestion";
import QuestionPage from "@/pageContainer/QuestionPage";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const question = ({ id }: { id: string }) => {
  const [grpId, setGrpId] = useRecoilState(groupId);
  useEffect(() => {
    setGrpId(id);
  }, []);
  const { questions, isLoading } = useQuestion(id);
  console.log(questions);
  return <QuestionPage id={id} />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  return { props: { id } };
};

export default question;
