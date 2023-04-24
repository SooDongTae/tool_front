export const Header = () => {
  return (
    <div className="w-full h-[6rem] fixed shadow-xl bg-[white] z-50 flex justify-center items-center">
      <div className="w-[75rem]  flex flex-row items-center justify-between">
        <div className="w-[4rem] h-[4rem] bg-GreenLight-30 mr-[2rem]" />
        <button className="button-layout border-[1px] border-solid border-GrayScale-20">
          로그인
        </button>
      </div>
    </div>
  );
};
