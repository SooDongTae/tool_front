import { useState } from "react";
import ReactDatePicker from "react-datepicker";
interface FormDateInputType {
  title?: string;
  inputName: string;
  setData: ({}) => void;
  width: string;
  type: string;
}
export const FormDateInput = ({
  setData,
  width,
  title,
  inputName,
  type,
}: FormDateInputType) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className="input-box">
      <ReactDatePicker
        customInput={
          <input
            className={`form-input peer w-[${width}] h-[4rem]`}
            // onChange={(e) => setData({ type: type, data: e.target.value })}
            value={"124"}
          />
        }
        selected={startDate}
        onChange={(e) => setData({ type: type, data: e })}
      />
      <div className={`input-text ${title ? "animate-InputHover" : null}`}>
        {inputName}
      </div>
    </div>
  );
};
