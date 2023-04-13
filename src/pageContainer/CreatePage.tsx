import { FormSelectInput } from "@/components/FormSelectInput";
import { FormTextInput } from "@/components/FormTextInput";
import { useReducer, useState } from "react";
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
type Action = { type: 'Category' } | { type: 'People' } | { type: 'Title' } | { type: 'Account' } | { type: 'Bank' } | { type: 'EndDate' } | { type: 'Fee' } | { type: 'Desc' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

export const CreatePage = () => {
  const [category, setCategory] = useState("");
  const [people, setPeople] = useState("");
  const [title, setTitle] = useState("");
  const [account, setAccount] = useState("");
  const [bank, setBank] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fee, setFee] = useState("");
  const [desc, setDesc] = useState("");

  const [form, setForm] = useReducer(reducer,0);
  return (
    <div className="w-screen flex items-center pt-[10rem] justify-center">
      <div className="w-[75rem]">
        <div className="h-[3rem] border-b-2 items-center  text-3xl font-semibold">
          <span className="text-GreenLight-30">공동구매 파티</span>
          <span> 등록</span>
        </div>
        <FormTextInput
          setData={setTitle}
          inputName="제목"
          width="49rem"
          title={title}
        />
        <div className="form-row w-[49rem]">
          <FormSelectInput
            setData={setCategory}
            title={category}
            inputName="카테고리"
            options={["", "카테1", "카테2", "카테3"]}
          />
          <FormTextInput
            setData={setPeople}
            title={people}
            inputName="참가 인원수"
            width="24rem"
          />
        </div>
        <div className="form-row w-[49rem]">
          <FormTextInput
            title={account}
            setData={setAccount}
            width="24rem"
            inputName="계좌번호"
          />
          <FormSelectInput
            title={bank}
            setData={setBank}
            inputName="은행"
            options={["", "신한", "국민", "우리", "토스"]}
          />
        </div>
        <div className="form-row w-[49rem]">
          <FormTextInput
            title={fee}
            setData={setFee}
            width="24rem"
            inputName="참여 금액"
          />
          <FormTextInput
            title={fee}
            setData={setFee}
            width="24rem"
            inputName="종료 날짜"
          />
        </div>
        <div className="mt-[1.5rem] flex items-start">
          <textarea
            className="h-[20rem] form-input peer w-[74rem] pt-[1rem]"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div
            className={`peer-focus:animate-TextAreaHover absolute pl-4 pt-4 text-[1.3rem] text-GrayScale-30 font-bold ${
              desc ? "animate-TextAreaHover" : null
            }`}
          >
            상세정보
          </div>
        </div>
        <div className="form-row w-[74rem]"></div>
        <div className="w-full flex justify-center mt-[4rem] mb-[4rem]">
          <button
            className="w-[10rem] h-[5rem] bg-GreenLight-30 text-white text-[1.5rem] rounded-[10rem]"
            onClick={() => null}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};
