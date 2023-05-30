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
