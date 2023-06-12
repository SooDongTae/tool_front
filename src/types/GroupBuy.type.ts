export interface IGroupBuy {
  class_no: number;
  content: string;
  cost: number;
  currentPeople: number;
  grade: number;
  id: number;
  imgSrc: string;
  maxPeople: number;
  owner: string;
  ownerRating: number;
  ownerRatingScore: number;
  participantResponses: [];
  status: string;
  student_no: number;
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
