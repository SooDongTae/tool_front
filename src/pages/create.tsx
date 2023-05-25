import { userState } from "@/context/userState";
import { CreatePage } from "@/pageContainer/CreatePage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

export const Create = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (!!user.id === false) {
      router.push(
        "https://auth.bssm.kro.kr/oauth?clientId=98fd44ad&redirectURI=http://localhost:3000/oauth"
      );
    }
  });
  return <CreatePage />;
};

export default Create;
