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

const useLoginMutation = (authCode: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => onLogin(authCode), {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      queryClient.invalidateQueries("user");
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
