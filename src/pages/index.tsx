import { NextSeo } from "next-seo";
import { MainPage } from "@/pageContainer/MainPage";

export default function Home() {
  return (
    <>
      <NextSeo title="Tool" description="Tool 메인페이지 입니다" />
      <MainPage />
    </>
  );
}
