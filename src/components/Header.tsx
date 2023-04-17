import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchBar } from "./SearchBar";
export const Header = () => {
  const [search, setSearch] = useState(true);
  console.log(search);
  return (
    <div className="w-full h-[6rem] fixed shadow-xl bg-[white] z-50 flex justify-center items-center">
      <div className="w-[75rem] flex flex-row items-center">
        <div className="w-[4rem] h-[4rem] bg-GreenLight-30 mr-[2rem]" />
        <SearchBar/>
      </div>
    </div>
  );
};
