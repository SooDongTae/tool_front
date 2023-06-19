import { IFormInput } from "@/types/Input.type";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormDateInput = ({
  setData,
  width,
  date,
  inputName,
  type,
}: IFormInput) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="input-box">
      <DatePicker
        locale="ko"
        className={`form-input peer w-[${width}] h-[4rem]`}
        selected={date}
        onChange={(date) => setData({ type: type, data: date })}
        onFocus={() => setIsFocus(true)}
        value={
          date
            ? date.getFullYear().toString() +
              "/" +
              (date.getMonth() + 1).toString() +
              "/" +
              date.getDate().toString()
            : ""
        }
      />
      <div
        className={`input-text ${
          isFocus || !!date ? "animate-InputHover" : null
        }`}
      >
        {inputName}
      </div>
    </div>
  );
};
