import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
interface CateModalType {
  setData: (v: number) => void;
  data: number;
  category: string[];
}
export const CategoryModal = ({ setData, data, category }: CateModalType) => {
  const [open, setOpen] = useState(false);
  const CategoryItem = category.map((item, idx) => {
    return (
      <div
        className={`${
          idx == data
            ? "text-GreenLight-30 font-bold"
            : "text-GrayScale-30 hover:text-black "
        } w-full h-[2.5rem] pl-4 flex items-center text-[.9rem]  hover:bg-GrayScale-15`}
        onClick={() => setData(idx)}
        key={idx}
      >
        {item}
      </div>
    );
  });
  return (
    <>
      <div
        className={`w-[7rem] h-[2.5rem] shadow-[rgba(0,_0,_0,_0.08)_0px_0px_4px] flex flex-row justify-around items-center text-[0.9rem] relative border-[.5px] border-GrayScale-20 rounded-[5px] ${
          open ? "[&>svg]:rotate-180 " : null
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {category[data]}
        <AiFillCaretDown className="duration-300" />
        {open ? (
          <div className="w-[10rem] mt-[1rem] left-0 absolute top-full shadow-[rgba(0,_0,_0,_0.1)_0px_0px_8px_0px] bg-white z-10">
            <div className="w-full">{CategoryItem}</div>
          </div>
        ) : null}
      </div>
    </>
  );
};
