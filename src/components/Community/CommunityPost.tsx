import { CommunityPostType } from "@/types/Community.type";

export const CommunityPost = ({
  owner,
  title,
  created_at,
  view,
  recommend,
  category
}: CommunityPostType) => {
  return (
    <div className="w-full flex h-[3.5rem]">
      <div className="w-[15%] h-full center">{owner}</div>
      <div className="w-[50%] h-full center"><span className="text-GreenLight-30 font-bold mr-[.3rem]">[{category}]</span>{title}</div>
      <div className="w-[15%] h-full center">{created_at}</div>
      <div className="w-[10%] h-full center">{view}</div>
      <div className="w-[10%] h-full center">{recommend}</div>
    </div>
  );
};
