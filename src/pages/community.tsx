import useConfig from "@/hooks/useConfig";
import { CommunityPage } from "@/pageContainer/CommunityPage";
import { NextSeo } from "next-seo";
export const Community = () => {
  const { seoConfig } = useConfig({
    title: "Tool | 커뮤니티",
    description: "Tool 커뮤니티 페이지입니다.",
  });
  return (
    <>
      <NextSeo {...seoConfig} />
      <CommunityPage school="부산소프트웨어마이스터고" />;
    </>
  );
};
export default Community;
