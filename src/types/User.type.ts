export interface UserType {
  id: number;
  grade: number;
  classNo: number;
  stuNo: number;
  name: string;
  token: string;
}

export interface IUser extends UserType {
  profileUrl: string;
  email: string;
  joinRequests: number;
}

export interface IStudent {
  grade: number;
  class_no: number;
  student_no: number;
  owner: string;
  id: number;
  name?: string;
}
