import { customAxios } from "@/lib/axios/customAxios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const rejectRequest = async (id: number) => {
  const { data } = await customAxios.put(`/api/user/reject/${id}`, {
    headers: {
      Authorization: `Bearer${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};

const useReject = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => rejectRequest(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["requests"]);
      toast.success("참가 요청 거절됨");
    },
    onError: () => {
      toast.error("참가 요청이 거절되지 않음");
    },
  });
};

export default useReject;
