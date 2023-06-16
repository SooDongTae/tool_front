import { StateType } from "@/types/State.type";
import { AiOutlineSearch } from "react-icons/ai";
import lodash from "lodash";
import { ChangeEvent } from "react";
export const SearchBar = ({ setData }: StateType) => {
  const debounceOnChange = lodash.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setData && setData(e.target.value);
    },
    300
  );
  return (
    <div className="flex justify-between flex-row">
      <input
        onChange={debounceOnChange}
        placeholder="제목으로 검색..."
        className="h-[2.5rem] focus:outline-none w-[14rem] border-b-GreenLight-30 border-b-[.5px] bg-Background-Gray pl-2 text-lg"
      />
      <AiOutlineSearch size={"2rem"} className="text-GreenLight-30"/>
    </div>
  );
};
