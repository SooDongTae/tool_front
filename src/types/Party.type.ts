import { IStudent } from "./User.type";

export interface IParty extends IStudent {
  title: string;
  currentPeople: number;
  maxPeople: number;
  untilAt: Date;
  cost: number;
  imgSrc: string;
  category? : string;
  views : number;
}

export interface IForm {
  category: string;
  maxPeople: number;
  title: string;
  account: string;
  bank: string;
  untilAt: string;
  cost: number;
  content: string;
}

export interface GetPartyListType {
  limit?: number;
  offset?: number;
  sortField?: string;
  sortWay?: string;
  category?: string;
  title: string;
  status?: "ACTIVATED" | "DEACTIVATED";
}
