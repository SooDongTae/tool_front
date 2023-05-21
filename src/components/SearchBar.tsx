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
  return (
    <div className="w-fit h-fit relative flex items-center ">
      <button className=" bg-Background-Gray border-none text-[1.3rem] font-bold outline-none absolute right-0 text-[black] flex justify-end items-center peer">
        <AiOutlineSearch
          className="duration-300 text-GreenLight-30 lg:w-[1rem] lg:h-[1rem] w-[2rem] h-[2rem]"
        />
      </button>
      <input
        onChange={debounceOnChange}
        placeholder="제목으로 검색..."
        className={`${
          data ? "w-[16rem] border-b-GreenLight-30 border-b-[1px] " : null
        } bg-Background-Gray peer-focus:border-b-[1px] border-b-0 border-b-GreenLight-30 peer-focus:border-GreenLight-30 focus:border-b-[1px]  focus:border-GreenLight-30  lg:h-[2.5rem] h-[1.5rem] w-0 p-[0.5rem] lg:text-[1.1rem] text-sm outline-none transition-all duration-500 lg:pr-[2.5rem] pr-[2rem] peer-focus:border-solid text-[black] lg:peer-focus:w-[16rem] peer-focus:w-[8rem] peer-focus:rounded-none  peer-focus:transition-ease-in-out peer-focus:duration-500 peer-focus:bg-transparent lg:focus:w-[16rem] focus:w-[8rem] focus:rounded-none focus:bg-transparent focus:duration-500 500ms focus:ease-in-out focus:border-solid`}
        pattern="^[a-zA-Z0-9]+$"
      />
    </div>
  );
};
 