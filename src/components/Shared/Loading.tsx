export const Loading = () => {
  return (
    <div className="w-screen h-screen left-0 top-0 absolute bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      <div className="w-[5rem] flex justify-between">
        <div className="bg-GreenLight-30 rounded-full animate-[Loading_1s_linear_infinite_0ms] w-4 h-4" />
        <div className="bg-OrangeDark-30 rounded-full animate-[Loading_1s_linear_infinite_200ms] w-4 h-4" />
        <div className="bg-BlueLight-20 rounded-full animate-[Loading_1s_linear_infinite_400ms] w-4 h-4" />
      </div>
    </div>
  );
};
  