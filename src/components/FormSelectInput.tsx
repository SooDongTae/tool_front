interface FormSelectInputType {
  title?: string;
  inputName: string;
  setData: ({}) => void;
  options: string[];
  type: string;
}

export const FormSelectInput = ({
  inputName,
  setData,
  title,
  options,
  type,
}: FormSelectInputType) => {
  const Options = options.map((data, idx) => {
    return (
      <option value={data} key={idx}>
        {data}
      </option>
    );
  });
  return (
    <div className="input-box">
      <select
        className={`form-input peer w-[24rem] h-[4rem]`}
        onChange={(e) => setData({ type: type, data: e.target.value })}
      >
        {Options}
      </select>
      <div className={`input-text ${title ? "animate-InputHover" : null}`}>
        {inputName}
      </div>
    </div>
  );
};
