import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
export const Header = () => {
  const [search, setSearch] = useState(true);
  console.log(search);
  return (
    <div className="w-full h-[6rem] fixed shadow-xl bg-[white] z-50 flex justify-center items-center">
      <div className="w-[75rem] flex flex-row items-center">
        <div className="w-[4rem] h-[4rem] bg-GreenLight-30" />
        <div className=" h-fit w-fit relative">
          <button className="w-[4rem] h-[4rem] border-none text-[1.5rem] font-bold outline-none cursor-pointer rounded-full absolute right-0 peer"></button>
          <input className="h-[4rem] w-[4rem] border-none p-[10px] font-[1.5rem] tracking-[2px] outline-none rounded-[25px] transition-all pr-[40px] peer-focus:w-[300px] peer-focus:rounded-none peer-focus:border-b-[1px] peer-focus:transition-[all_500ms_cubic-bezier(0,_0.110,_0.35,_2)]" />
        </div>
      </div>
    </div>
  );
};
