import { IFormInput } from "@/types/Input.type";

export const FormTextInput = ({
  setData,
  width,
  title,
  inputName,
  type,
  inputType,
  value,
}: IFormInput) => {
  return (
    <div className="input-box">
      <input
        value={value}
        type={inputType}
        className={`form-input peer w-[${width}] h-[4rem]`}
        onChange={(e) => setData({ type: type, data: e.target.value })}
      />
      <div className={`input-text ${title ? "animate-InputHover" : null}`}>
        {inputName}
      </div>
    </div>
  );
};
