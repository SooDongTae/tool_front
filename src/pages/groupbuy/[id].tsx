import useGroupBuy from "@/hooks/useGroupBuy";
import GroupBuyPage from "@/pageContainer/GroupBuyPage";
import { IGroupBuy } from "@/types/GroupBuy.type";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";

const groupbuy = ({ id }: { id: string }) => {
  const { party, isLoading } = useGroupBuy(id);
  console.log(id);
  console.log(party);
  return <GroupBuyPage party={party} />;
};
export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  return { props: { id } };
};
export default groupbuy;
