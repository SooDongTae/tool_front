import usePostDetail from "@/hooks/community/useDetail";
export const DetailPage = ({ id }: { id: string }) => {
  const { postDetail, isLoading } = usePostDetail(id);
  console.log(postDetail);
  return <div className="layout">
    <div className="container">
      
    </div>
  </div>;
};
