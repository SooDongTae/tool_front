import { IStudent } from "./User.type";

export interface IGroupBuy extends IStudent {
  content: string;
  cost: number;
  currentPeople: number;
  imgSrc: string;
  maxPeople: number;
  ownerRating: number;
  ownerRatingScore: number;
  participantResponses: [];
  status: string;
  title: string;
  untilAt: Date;
  views: number;
}
export interface IHistory {
  cost: number;
  title: string;
  untilAt: Date;
  status: string;
}
export interface IHistoryList {
  map(arg0: (data: IGroupBuy) => JSX.Element): import("react").ReactNode;
  groupBuyingResponseList: [IGroupBuy];
}
export interface ILeftTime {
  leftDay: number;
  leftHour: number;
  leftMinute: number;
}

export interface ICreateQuestion {
  id: string;
  form: {
    content: string;
    secret: boolean;
  };
}

export interface IQuestionForm {
  content: string;
  secret: boolean;
}

export interface IUpdateQuestion {
  id: string;
  content: string;
  isSecret: boolean;
  getIsOpen: (isOpen: boolean) => void;
}

export interface IQuestion {
  content: string;
  createdAt: Date;
  id: string;
  isSecret: boolean;
  lastModifiedAt: Date;
  writerName: string;
}

export interface IAnswer {
  id: string;
  content: string;
}
