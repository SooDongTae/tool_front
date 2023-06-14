import { DetailPage } from "@/pageContainer/DetailPage";
import { NextPageContext } from "next";
export const Detail = ({ id }: { id: string }) => {
  console.log(id);
  return <DetailPage id={id} />;
};
export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  if (typeof id === "string") {
    return { props: { id } };
  }
  return { props: { id: "0" } };
};
export default Detail;
