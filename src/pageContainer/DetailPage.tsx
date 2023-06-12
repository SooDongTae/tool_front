import usePostDetail from "@/hooks/community/useDetail";
export const DetailPage = ({ id }: { id: string | undefined | string[] }) => {
  const { postDetail, isLoading } = usePostDetail(id);
  console.log(postDetail)
  return <div className="w-full"></div>;
};
