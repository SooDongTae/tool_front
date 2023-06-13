export interface IFormInput {
  date?: null | Date;
  title?: string;
  inputName: string;
  setData: ({}) => void;
  width?: string;
  type: string;
}

export interface IFormSelectInput extends IFormInput {
  values: string[];
  options: string[];
}
