import { IStudent } from "./User.type";

export interface CommunityPostType {
  owner: string;
  title: string;
  created_at: string;
  view: string;
  recommend: string;
  category: string;
}

export interface IComment extends IStudent {
  content: string;
  createdAt?: Date;
}
