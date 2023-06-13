import { FormSelectInput } from "@/components/FormInput/FormSelectInput";
import { FormTextInput } from "@/components/FormInput/FormTextInput";
import { useReducer, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import usePartyMutation from "@/hooks/party/useCreate";
import { FormDateInput } from "@/components/FormInput/FormDateInput";
export const CreatePage = () => {
  const formData = new FormData();
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewImg, setPreviewImg] = useState<any>(null);
  const [sendImage, setSendImage] = useState<any>(null);
  const { mutate } = usePartyMutation(formData);
  const [form, setForm] = useReducer(reducer, {});

  const setFormData = () => {
    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            ...form,
            untilAt:
              form.untilAt.getFullYear().toString() +
              "-" +
              (parseInt(form.untilAt.getMonth().toString()) < 10 ? "0" : "") +
              (form.untilAt.getMonth() + 1).toString() +
              "-" +
              (parseInt(form.untilAt.getDate().toString()) < 10 ? "0" : "") +
              form.untilAt.getDate().toString(),
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    formData.append("file", sendImage);
  };

  const setImageFile = (file: React.ChangeEvent<HTMLInputElement>) => {
    const target = file.currentTarget;
    const imgSrc = URL.createObjectURL((target.files as FileList)[0]);
    setPreviewImg(imgSrc);
    setSendImage((target.files as FileList)[0]);
  };

  return (
    <div className="layout">
      <div className="w-[75rem]">
        <div className="h-[3rem] border-b-2 items-center  text-3xl font-semibold">
          <span className="text-GreenLight-30">공동구매 파티</span>
          <span> 등록</span>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <FormTextInput
              type="Title"
              setData={setForm}
              inputName="제목"
              width="49rem"
              title={form.title}
            />
            <div className="form-row ">
              <FormSelectInput
                type="Category"
                setData={setForm}
                title={form.category}
                inputName="카테고리"
                options={["", "상품", "음식", "옷", "기타"]}
                values={["", "PRODUCT", "FOOD", "CLOTHES", "ETC"]}
              />
              <FormTextInput
                type="People"
                setData={setForm}
                title={form.maxPeople}
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
                values={["", "신한", "국민", "우리", "토스"]}
              />
            </div>
            <div className="form-row w-[49rem]">
              <FormTextInput
                type="Fee"
                title={form.cost}
                setData={setForm}
                width="24rem"
                inputName="참여 금액"
              />
              <FormDateInput
                type="EndDate"
                date={form.untilAt}
                setData={setForm}
                width="24rem"
                inputName="종료 날짜"
              />
            </div>
          </div>
          <label
            htmlFor="chooseFile"
            className="mt-[1.5rem] rounded-md w-[20.5rem] h-[20.5rem] border-[1px] flex justify-center items-center relative cursor-pointer"
          >
            {previewImg ? (
              <img
                src={previewImg}
                className="object-contain w-[20.5rem] h-[20.5rem] rounded-md"
              />
            ) : (
              <BiImageAdd
                className="absolute text-GreenLight-30"
                size={"3rem"}
              />
            )}
            <div className={`${previewImg ? "hidden" : null}`}></div>
          </label>
          <input
            ref={fileRef}
            onChange={setImageFile}
            className="hidden"
            id="chooseFile"
            type="file"
            accept="image/png, image/jpeg, image/gif"
          ></input>
        </div>
        <div className="mt-[1.5rem] flex items-start">
          <textarea
            className="h-[20rem] form-input peer w-[75rem] pt-[1rem]"
            onChange={(e) => setForm({ type: "Desc", data: e.target.value })}
          />
          <div
            className={`peer-focus:animate-TextAreaHover absolute pl-4 pt-4 text-[1.3rem] text-GrayScale-30 font-bold ${
              form.content ? "animate-TextAreaHover" : null
            }`}
          >
            상세정보
          </div>
        </div>
        <div className="form-row w-[74rem]"></div>
        <div className="w-full flex justify-center mt-[4rem] mb-[4rem]">
          <button
            onClick={() => {
              setFormData();
              mutate();
            }}
            className="w-[8rem] h-[4rem] bg-GreenLight-30 text-white text-[1.5rem] rounded-[10px]"
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "Category":
      return { ...state, category: action.data };
    case "People":
      return { ...state, maxPeople: action.data };
    case "Title":
      return { ...state, title: action.data };
    case "Account":
      return { ...state, account: action.data };
    case "Bank":
      return { ...state, bank: action.data };
    case "EndDate":
      return { ...state, untilAt: action.data };
    case "Fee":
      return { ...state, cost: action.data };
    case "Desc":
      return { ...state, content: action.data };
    default:
      throw new Error("Unhandled action");
  }
};
