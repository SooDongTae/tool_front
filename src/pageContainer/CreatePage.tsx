import { useState } from "react";
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
export const CreatePage = () => {
  const [form, setForm] = useState<FormType>({
    category: "",
    people: 0,
    title: "",
    account: "",
    bank: "",
    startDate: "",
    endDate: "",
    fee: 0,
    desc: "",
  });
  return (
    <div className="w-screen flex items-center pt-[10rem] justify-center">
      <div className="w-[75rem]">
        <div className="h-[3rem] border-b-2 items-center  text-3xl font-semibold">
          <span className="text-GreenLight-30">공동구매 파티</span>
          <span> 등록</span>
        </div>
        <div className="form-row w-[49rem]">
          <div className="input-box">
            <select
              className="form-input peer w-[24rem] h-[4rem]"
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value=""></option>
              <option value="카테1">카테1</option>
              <option value="카테2">카테2</option>
              <option value="카테3">카테3</option>
            </select>
            <div
              className={`input-text ${
                form.category ? "animate-InputHover" : null
              }`}
            >
              카테고리
            </div>
          </div>
          <div className="input-box">
            <select
              className="form-input peer w-[24rem] h-[4rem]"
              onChange={(e) =>
                setForm({ ...form, people: parseInt(e.target.value) })
              }
            >
              <option value=""></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <div
              className={`input-text ${
                form.people ? "animate-InputHover" : null
              }`}
            >
              참가 인원수
            </div>
          </div>
        </div>

        <div className="input-box">
          <input
            className="form-input peer w-[49rem] h-[4rem]"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <div
            className={`input-text ${form.title ? "animate-InputHover" : null}`}
          >
            제목
          </div>
        </div>
        <div className="form-row w-[74rem]">
          <div className="input-box h-[4rem]">
            <input
              className=" form-input peer w-[49rem] h-[4rem]"
              onChange={(e) => setForm({ ...form, account: e.target.value })}
            />
            <div
              className={`input-text ${
                form.account ? "animate-InputHover" : null
              }`}
            >
              계좌번호
            </div>
          </div>
          <div className="input-box">
            <select
              className="form-input peer w-[24rem] h-[4rem]"
              onChange={(e) => setForm({ ...form, bank: e.target.value })}
            >
              <option value=""></option>
              <option value="신한">신한</option>
              <option value="국민">국민</option>
              <option value="우리">우리</option>
            </select>
            <div
              className={`input-text ${
                form.bank ? "animate-InputHover" : null
              }`}
            >
              은행
            </div>
          </div>
        </div>
        <div className="input-box">
          <input
            type="number"
            className=" form-input peer w-[24rem] h-[4rem]"
            onChange={(e) =>
              setForm({ ...form, fee: parseInt(e.target.value) })
            }
          />
          <div
            className={`input-text ${form.fee ? "animate-InputHover" : null}`}
          >
            참여 금액
          </div>
        </div>
        <div className="mt-[1.5rem] flex items-start">
          <textarea
            className="h-[20rem] form-input peer w-[74rem] pt-[1rem]"
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
          <div
            className={`peer-focus:animate-TextAreaHover absolute pl-2 text-[1.2rem] text-GrayScale-30 font-bold ${
              form.desc ? "animate-TextAreaHover" : null
            }`}
          >
            상세정보
          </div>
        </div>
        <div className="form-row w-[74rem]"></div>
        <div className="w-full flex justify-center mt-[4rem] mb-[4rem]">
          <button
            className="w-[10rem] h-[5rem] bg-GreenLight-30 text-white text-[1.5rem] rounded-[10rem]"
            onClick={() => console.log(form)}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};
