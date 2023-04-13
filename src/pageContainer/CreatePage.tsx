import { FormSelectInput } from "@/components/FormSelectInput";
import { FormTextInput } from "@/components/FormTextInput";
import { useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export interface FormType {
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

const notify = (msg: string) => toast.error(msg);
function reducer(state: any, action: any): any {
  switch (action.type) {
    case "Category":
      return { ...state, category: action.data };
    case "People":
      if (parseInt(action.data) < 0 || parseInt(action.data) > 20) {
        notify("참가자 수는 0 ~ 20 사이의 숫자여야 합니다!");
        return { ...state };
      } else if (isNaN(action.data)) {
        notify("참가자 수는 숫자여야 합니다!");
        return { ...state };
      }
      return { ...state, people: action.data };
    case "Title":
      return { ...state, title: action.data };
    case "Account":
      return { ...state, account: action.data };
    case "Bank":
      return { ...state, bank: action.data };
    case "EndDate":
      return { ...state, endDate: action.data };
    case "Fee":
      if (isNaN(action.data)) {
        notify("참여 금액은 숫자여야 합니다!");
        return { ...state };
      }
      return { ...state, fee: parseInt(action.data) };
    case "Desc":
      return { ...state, desc: action.data };
    default:
      throw new Error("Unhandled action");
  }
}

export const CreatePage = () => {
  const [form, setForm] = useReducer(reducer, {
    category: "",
    people: "",
    title: "",
    account: "",
    bank: "",
    endDate: "",
    fee: "",
    desc: "",
  });
  console.log(form);
  return (
    <div className="w-screen flex items-center pt-[10rem] justify-center">
      <div className="w-[75rem]">
        <div className="h-[3rem] border-b-2 items-center  text-3xl font-semibold">
          <span className="text-GreenLight-30">공동구매 파티</span>
          <span> 등록</span>
        </div>
        <FormTextInput
          type="Title"
          setData={setForm}
          inputName="제목"
          width="49rem"
          title={form.title}
        />
        <div className="form-row w-[49rem]">
          <FormSelectInput
            type="Category"
            setData={setForm}
            title={form.category}
            inputName="카테고리"
            options={["", "카테1", "카테2", "카테3"]}
          />
          <FormTextInput
            type="People"
            setData={setForm}
            title={form.people}
            inputName="참가 인원수"
            width="24rem"
          />
        </div>
        <div className="form-row w-[49rem]">
          <FormTextInput
            type="Account"
            title={form.account}
            setData={setForm}
            width="24rem"
            inputName="계좌번호"
          />
          <FormSelectInput
            title={form.bank}
            type="Bank"
            setData={setForm}
            inputName="은행"
            options={["", "신한", "국민", "우리", "토스"]}
          />
        </div>
        <div className="form-row w-[49rem]">
          <FormTextInput
            type="Fee"
            title={form.fee}
            setData={setForm}
            width="24rem"
            inputName="참여 금액"
          />
          <FormTextInput
            type="EndDate"
            title={form.endDate}
            setData={setForm}
            width="24rem"
            inputName="종료 날짜"
          />
        </div>
        <div className="mt-[1.5rem] flex items-start">
          <textarea
            className="h-[20rem] form-input peer w-[74rem] pt-[1rem]"
            onChange={(e) => setForm({ type: "Desc", data: e.target.value })}
          />
          <div
            className={`peer-focus:animate-TextAreaHover absolute pl-4 pt-4 text-[1.3rem] text-GrayScale-30 font-bold ${
              form.desc ? "animate-TextAreaHover" : null
            }`}
          >
            상세정보
          </div>
        </div>
        <div className="form-row w-[74rem]"></div>
        <div className="w-full flex justify-center mt-[4rem] mb-[4rem]">
          <button className="w-[10rem] h-[5rem] bg-GreenLight-30 text-white text-[1.5rem] rounded-[10rem]">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};
