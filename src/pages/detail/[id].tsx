import { DetailPage } from "@/pageContainer/DetailPage";
import { NextPageContext } from "next";
export const Detail = ({ id }: { id: string | undefined | string[] }) => {
  return <DetailPage id={id} />;
};
export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  return { props: { id } };
};
export default Detail;
