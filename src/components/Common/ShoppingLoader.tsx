import { RotatingSquare } from 'react-loader-spinner';

export default function ShoppingLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mx-auto">
      <RotatingSquare
        height="100"
        width="100"
        color="#4377fd"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="tracking-tight text-gray-300">
        요즘 주목받는 상품을 불러오고 있어요<span className="ml-2">👀</span>
      </p>
    </div>
  );
}
