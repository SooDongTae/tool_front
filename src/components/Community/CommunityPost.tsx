import { CommunityPostType } from "@/types/Community.type";

export const CommunityPost = ({
  owner,
  title,
  created_at,
  views,
  likes,
  category,
}: CommunityPostType) => {
  return (
    <div className="w-full flex h-[3.5rem] hover:bg-GrayScale-15 duration-300 cursor-pointer">
      <div className="w-[15%] h-full center">{owner}</div>
      <div className="w-[50%] h-full center">
        <span className="text-GreenLight-30 font-bold mr-[.3rem]">
          [{category}]
        </span>
        {title}
      </div>
      <div className="w-[15%] h-full center">{created_at.substring(0, 10)}</div>
      <div className="w-[10%] h-full center">{views}</div>
      <div className="w-[10%] h-full center">{likes}</div>
    </div>
  );
};
