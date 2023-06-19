import { userState } from "@/context/userState";
import useConfig from "@/hooks/useConfig";
import { WritePage } from "@/pageContainer/WritePage";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const Write = () => {
  const [user, setUser] = useRecoilState(userState);
  const { seoConfig } = useConfig({
    title: "Tool | 글 작성",
    description: "커뮤니티 글을 작성하는 페이지 입니다.",
  });
  const router = useRouter();
  useEffect(() => {
    if (!!user.id === false) {
      router.push(
        process.env.NEXT_PUBLIC_LOGIN_API_KEY
          ? process.env.NEXT_PUBLIC_LOGIN_API_KEY
          : ""
      );
    }
  });
  return (
    <>
      <NextSeo {...seoConfig} />
      <WritePage />
    </>
  );
};

export default Write;
