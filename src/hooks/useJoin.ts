import { customAxios } from "@/lib/axios/customAxios";
import axios from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
export const joinParty = async (id: number) => {
  const { data } = await customAxios.post(
    "/api/participant/join",
    { groupBuyingId: id },
    {
      headers: {
        Authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return data;
};
const usePartyMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => joinParty(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupBuy"]);
      toast.success("파티 참여 대기중");
    },
    onError: () => {
      toast.error("파티 참여 실패");
    },
  });
};
export default usePartyMutation;
