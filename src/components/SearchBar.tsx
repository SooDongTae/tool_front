import { StateType } from "@/types/State.type";
import { AiOutlineSearch } from "react-icons/ai";
import lodash from "lodash";
import { ChangeEvent } from "react";
export const SearchBar = ({ setData, data }: StateType) => {
  const debounceOnChange = lodash.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setData && setData(e.target.value);
    },
    300
  );
  console.log(data);
  return (
    <div className="w-fit h-fit relative flex items-center ml-[2rem]">
      <button className=" bg-white border-none text-[1.3rem] font-bold outline-none absolute right-0 text-[black] flex justify-end items-center peer">
        <AiOutlineSearch
          size={"2rem"}
          className=" hover:bg-GrayScale-15 duration-300 text-GreenLight-30"
        />
      </button>
      <input
        onChange={debounceOnChange}
        placeholder="제목으로 검색..."
        className={`${
          data ? "w-[20rem] border-b-GreenLight-30 border-b-[1px] " : null
        } peer-focus:border-b-[1px] border-b-0 border-b-GreenLight-30 peer-focus:border-GreenLight-30 focus:border-b-[1px]  focus:border-GreenLight-30  h-[2.5rem] w-0 p-[0.5rem] text-[1.1rem] outline-none transition-all duration-500 pr-[2.5rem] peer-focus:border-solid text-[black] peer-focus:w-[20rem] peer-focus:rounded-none  peer-focus:transition-ease-in-out peer-focus:duration-500 peer-focus:bg-transparent focus:w-[20rem] focus:rounded-none focus:bg-transparent focus:duration-500 500ms focus:ease-in-out focus:border-solid`}
        pattern="^[a-zA-Z0-9]+$"
      />
    </div>
  );
};
