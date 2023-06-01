import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
export const joinParty = async (id: string) => {
  const { data } = await axios.post(
    `/api/participant/join`,
    { id: id },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};
const usePartyMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => joinParty(id), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["groupBuy"]);
      toast.success("파티 참여 대중");
    },
    onError: () => {
      toast.error("파티 참여 실");
    },
  });
};
export default usePartyMutation;
