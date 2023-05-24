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
  leftSecond: number;
}

export interface ICreateQuestion {
  id: string;
  content: string;
  isSecret: boolean;
}

export interface IQuestion {
  content: string;
  createdAt: string;
  id: number;
  isSecret: boolean;
  lastModifiedAt: string;
  writerName: string;
}
