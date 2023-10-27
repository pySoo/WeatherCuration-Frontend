import { CurrentConditionData } from '@/graphql/types/queryDataTypes';

import CurrentWeather from './CurrentWeather';
import RecommendSection from './RecommendSection';

type WeatherCurationProps = {
  currentConditionData: CurrentConditionData;
};

export default function WeatherCuration({
  currentConditionData,
}: WeatherCurationProps) {
  return (
    <div className="flex justify-center items-center h-full mx-auto w-full pt-20 pb-10">
      <div className="flex flex-col justify-center w-full h-full px-[14px] sm:px-[20px] max-w-[1000px]">
        <CurrentWeather currentConditionData={currentConditionData} />
        <RecommendSection />
      </div>
    </div>
  );
}
