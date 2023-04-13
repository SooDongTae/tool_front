import { FormType } from "@/pageContainer/CreatePage";

interface FormTextInputType {
  title?: string;
  inputName: string;
  setData: (v: string) => void;
  width: string;
}
export const FormTextInput = ({
  setData,
  width,
  title,
  inputName,
}: FormTextInputType) => {
  return (
    <div className="input-box">
      <input
        className={`form-input peer w-[${width}] h-[4rem]`}
        onChange={(e) => setData(e.target.value as string)}
      />
      <div className={`input-text ${title ? "animate-InputHover" : null}`}>
        {inputName}
      </div>
    </div>
  );
};
