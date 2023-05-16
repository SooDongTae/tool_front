import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const onLogin = async (authCode: string) => {
  const headers = { authCode: authCode };
  const { data } = await axios.post("/api/auth/oauth/bsm", null, {
    headers,
  });
  return data;
};

const useLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => onLogin(router.asPath.replace("/oauth?code=", "")), {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      queryClient.invalidateQueries("getUser");
      toast.success("로그인 성공!");
      router.push("/");
    },
    onError: () => {
      toast.error("로그인 실패!");
      router.push("/");
    },
  });
};

export default useLoginMutation;
