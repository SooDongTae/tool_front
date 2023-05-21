import QuestionPage from "@/pageContainer/QuestionPage";
import { NextPage, NextPageContext } from "next";
import React from "react";

const question = ({ id }: { id: string }) => {
  return <QuestionPage />;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  return { props: { id } };
};

export default question;
