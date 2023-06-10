import GetPost from "@/api/GetPost";
import { DetailPage } from "@/pageContainer/DetailPage";
import { NextPageContext } from "next";

export const Detail = ({ post }: any) => {
  return <DetailPage post={post} />;
};

// export const getServerSideProps = async (context: NextPageContext) => {
//   const { id } = context.query;
//   const PostData = await GetPost(id);
//   console.log(PostData);
//   return {
//     props: { post: JSON.parse(PostData ? PostData : {}) },
//   };
// };

export default Detail;
