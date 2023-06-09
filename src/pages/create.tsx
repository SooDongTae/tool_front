import { userState } from "@/context/userState";
import { CreatePage } from "@/pageContainer/CreatePage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const Create = () => {
  const [user, setUser] = useRecoilState(userState);
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
  return <CreatePage />;
};

export default Create;
