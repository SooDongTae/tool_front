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
export interface ILeftTime {
  leftDay: number;
  leftHour: number;
  leftMinute: number;
}

export interface ICreateQuestion {
  id: string;
  content: string;
  isSecret: boolean;
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
