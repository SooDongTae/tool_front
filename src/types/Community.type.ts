import { IStudent } from "./User.type";

export interface CommunityPostType {
  owner: string;
  title: string;
  created_at: string;
  views: string;
  likes: string;
  category: string;
}

export interface IComment extends IStudent {
  content: string;
  lastModified?: Date;
  name: string;
}
