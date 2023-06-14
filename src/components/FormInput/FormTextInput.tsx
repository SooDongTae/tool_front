import { IFormInput } from "@/types/FormInput.type";

export const FormTextInput = ({
  setData,
  width,
  title,
  inputName,
  type,
}: IFormInput) => {
  return (
    <div className="input-box">
      <input
        className={`form-input peer w-[${width}] h-[4rem]`}
        onChange={(e) => setData({ type: type, data: e.target.value })}
      />
      <div className={`input-text ${title ? "animate-InputHover" : null}`}>
        {inputName}
      </div>
    </div>
  );
};
