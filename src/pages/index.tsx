import { NextSeo } from "next-seo";
import { MainPage } from "@/pageContainer/MainPage";
import useConfig from "@/hooks/useConfig";
export default function Home() {
  const { seoConfig } = useConfig({
    title: "Tool",
    description: "공동구매 사이트 Tool",
  });
  return (
    <>
      <NextSeo {...seoConfig} />
      <MainPage />
    </>
  );
}
