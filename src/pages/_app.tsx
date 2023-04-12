import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, atom } from "recoil";
interface FormType {
  category: string;
  people: number;
  title: string;
  account: string;
  bank: string;
  startDate: string;
  endDate: string;
  fee: number;
  desc: string;
}
export const FormState = atom<FormType>({
  key: "form",
  default: {
    category: "",
    people: 0,
    title: "",
    account: "",
    bank: "",
    startDate: "",
    endDate: "",
    fee: 0,
    desc: "",
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
