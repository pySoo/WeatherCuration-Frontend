import MagnifyingLoader from './MagnifyingLoader';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-10">
      <MagnifyingLoader />
      <div className="text-center shadowed-text tracking-tight">
        <p>이번 주 날씨를 분석하고 있어요 👀</p>
        <p>비가 온다고 했었나..?</p>
      </div>
    </div>
  );
}
