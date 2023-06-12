export interface IRequest {
  classNo: number;
  cost: number;
  grade: number;
  groupName: string;
  id: number;
  studentNo: number;
  userName: string;
  userProfile: string;
}
export interface IRequestList {
  joinRequestResponses: [IRequest];
}
