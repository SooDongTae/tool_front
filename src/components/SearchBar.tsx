import { AiOutlineSearch } from "react-icons/ai";
export const SearchBar = () => {
  return (
    <div className="w-fit h-fit relative flex items-center">
      <button className="w-[4rem] h-[4rem] bg-white border-none text-[1.3rem] font-bold outline-none absolute right-0 text-[black] flex justify-end items-center focus:w-auto focus:h-auto peer">
        <AiOutlineSearch
          size={"3rem"}
          className=" hover:bg-GrayScale-15 duration-300"
        />
      </button>
      <input
        placeholder="제목으로 검색..."
        className="h-[4rem] w-[4rem] border-none p-[0.5rem] text-[1.1rem] outline-none transition-all duration-500 pr-[2.5rem] peer-focus:border-solid text-[black] peer-focus:w-[20rem] peer-focus:rounded-none peer-focus:border-b-[1px] peer-focus:transition-ease-in-out peer-focus:duration-500 peer-focus:bg-transparent focus:w-[20rem] focus:rounded-none focus:bg-transparent focus:border-b-[1px] focus:duration-500 500ms focus:ease-in-out focus:border-solid peer/inp"
      />
    </div>
  );
};
