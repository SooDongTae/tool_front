export const MainPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center pt-[10rem]">
      <div className="w-[90%]">
        <div className="w-full h-[14rem] rounded-[2rem] bg-BlueLight-20"></div>
        <div className="w-full h-[2.5rem] flex justify-between mt-8">
          <div className="grid grid-cols-3 h-full w-[45%] gap-8" >
            <div className="category-items">카테고리</div>
            <div className="category-items">카테고리1</div>
            <div className="category-items">카테고리2</div>
          </div>
          <div className="w-[8rem] category-items text-GreenLight-30">파티 만들기</div>
        </div>
        <div className="w-full grid grid-cols-3 gap-8">

        </div>
      </div>
    </div>
  );
};
