import { groupId } from "@/context/selectedGroupState";
import useGroupBuy from "@/hooks/useGroupBuy";
import GroupBuyPage from "@/pageContainer/GroupBuyPage";
import { IGroupBuy } from "@/types/GroupBuy.type";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const groupbuy = ({ id }: { id: string }) => {
  const [grpId, setGrpId] = useRecoilState(groupId);
  console.log(id);
  useEffect(() => {
    setGrpId(id);
  }, []);
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
