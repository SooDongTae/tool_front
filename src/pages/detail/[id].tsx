import useConfig from "@/hooks/useConfig";
import { DetailPage } from "@/pageContainer/DetailPage";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";
export const Detail = ({ id }: { id: string }) => {
  const { seoConfig } = useConfig({
    title: "Tool | 커뮤니티",
    description: "Tool 커뮤니티 디테일 페이지입니다F.",
  });
  return (
    <>
      <NextSeo {...seoConfig} />
      <DetailPage id={id} />
    </>
  );
};
export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  if (typeof id === "string") {
    return { props: { id } };
  }
};
export default Detail;
