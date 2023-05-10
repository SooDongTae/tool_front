export interface PartyProps {
  title: string;
  currentPeople: number;
  maxPeople: number;
  endDate: string;
  price: number;
  owner: string;
}

export interface FormType {
  category: string;
  maxPeople: number;
  title: string;
  account: string;
  bank: string;
  startDate: string;
  untilAt: string;
  cost: number;
  desc: string;
}
