import { StateType } from "@/types/State.type";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({ setData }: StateType) => {
  return (
    <div className="w-fit h-fit relative flex items-center [&>button]: ">
      <button className="w-[4rem] h-[4rem] bg-white border-none text-[1.3rem] font-bold outline-none absolute right-0 text-[black] flex justify-end items-center peer">
        <AiOutlineSearch
          size={"2rem"}
          className=" hover:bg-GrayScale-15 duration-300 text-GreenLight-30"
        />
      </button>
      <input
        onChange={(e) => setData(e.target.value)}
        placeholder="제목으로 검색..."
        className="h-[4rem] w-[4rem] border-none p-[0.5rem] text-[1.1rem] outline-none transition-all duration-500 pr-[2.5rem] peer-focus:border-solid text-[black] peer-focus:w-[20rem] peer-focus:rounded-none  peer-focus:transition-ease-in-out peer-focus:duration-500 peer-focus:bg-transparent focus:w-[20rem] focus:rounded-none focus:bg-transparent focus:duration-500 500ms focus:ease-in-out focus:border-solid peer/inp"
      />
    </div>
  );
};
