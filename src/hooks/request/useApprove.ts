import { customAxios } from "@/lib/axios/customAxios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const approveRequest = async (id: number) => {
  const { data } = await customAxios.put(`/api/user/approve/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useApprove = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => approveRequest(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["requests"]);
      toast.success("참가 요청 수락 성공!");
    },
    onError: () => {
      toast.error("참가 요청 수락 실패!");
    },
  });
};

export default useApprove;
