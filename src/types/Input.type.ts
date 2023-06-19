import { IPost } from "./Post.type";

export interface IFormInput {
  inputType?: string;
  date?: null | Date;
  title?: string | number;
  inputName: string;
  setData: (v: any) => void;
  width?: string;
  type: string;
  value?: number;
}

export interface IFormSelectInput extends IFormInput {
  values: string[];
  options: string[];
}
export interface IEditor {
  setData: (v: any) => void;
  data: IPost;
}
