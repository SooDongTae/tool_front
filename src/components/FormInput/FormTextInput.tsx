interface FormTextInputType {
  title?: string;
  inputName: string;
  setData: ({}) => void;
  width: string;
  type: string;
}
export const FormTextInput = ({
  setData,
  width,
  title,
  inputName,
  type,
}: FormTextInputType) => {
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
