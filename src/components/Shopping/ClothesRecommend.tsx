import { useRecoilValue } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import { ShoppingListType } from '@/graphql/types/queryDataTypes';
import { TemperatureType } from '@/types/weather';

import SubTitle from '../Common/SubTitle';
import ClothesByTemperature from './ClothesByTemperature';

type ClothesRecommendProps = {
  clothesList: ShoppingListType[];
};

export default function ClothesRecommend({
  clothesList,
}: ClothesRecommendProps) {
  const weatherState = useRecoilValue(weatherAtom);

  return (
    <div className="flex flex-col">
      <SubTitle className="px-1">오늘 뭐입지?</SubTitle>
      <div className="flex flex-col gap-[60px]">
        {weatherState.temperatureKeywords.map(
          (data: TemperatureType, index) => (
            <ClothesByTemperature
              key={data.value}
              clothesList={clothesList}
              temperatureData={data}
              isMax={index === weatherState.temperatureKeywords.length - 1}
            />
          ),
        )}
      </div>
    </div>
  );
}
