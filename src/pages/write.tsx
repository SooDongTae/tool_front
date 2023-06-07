import { userState } from "@/context/userState";
import { WritePage } from "@/pageContainer/WritePage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const Write = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (!!user.id === false) {
      router.push(
        "https://auth.bssm.kro.kr/oauth?clientId=98fd44ad&redirectURI=http://localhost:3000/oauth"
      );
    }
  });
  return <WritePage />;
};

export default Write;
