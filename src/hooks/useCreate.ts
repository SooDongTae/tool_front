import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
const onCreate = async (form: FormData) => {
  const { data } = await axios.post(`/api/groupBuying/create`, form, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
const usePartyMutation = (form: FormData) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => onCreate(form), {
    onSuccess: () => {
      queryClient.invalidateQueries(["party"]);
      toast.success("파티 생성 성공!");
      router.push("/");
    },
    onError: () => {
      toast.error("파티 생성 실패!");
      router.push("/");
    },
  });
};
export default usePartyMutation;
