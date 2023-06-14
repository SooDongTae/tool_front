export interface IParty {
  title: string;
  currentPeople: number;
  maxPeople: number;
  untilAt: Date;
  cost: number;
  owner: string;
  grade: number;
  class_no: number;
  student_no: number;
  imgSrc: string;
  category? : string;
  id : number;
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
