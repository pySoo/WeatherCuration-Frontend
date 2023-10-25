import { useState } from 'react';

import { ShoppingListType } from '@/graphql/types/queryDataTypes';
import { TemperatureType } from '@/types/weather';

import Description from '../Common/Description';
import Pill from '../Common/Pill';
import ShoppingList from './ShoppingList';

type ClothesByTemperatureProps = {
  clothesList?: ShoppingListType[];
  temperatureData: TemperatureType;
  isMax: boolean;
};

export default function ClothesByTemperature({
  clothesList,
  temperatureData,
  isMax,
}: ClothesByTemperatureProps) {
  const { value, keywords } = temperatureData;

  const highlightColor = isMax ? '#e98710' : '#4377fd';

  const [selectedKeyword, setSelectedKeyword] = useState(keywords[0]);

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword);
  };

  return (
    <div>
      <Pill
        bgColor={highlightColor}
        className={`w-fit cursor-auto font-semibold`}
      >
        {`${isMax ? '최고' : '최저'} 온도 ${value}°`}
      </Pill>
      <div className="flex items-center px-1 flex-wrap mt-3 mb-4 gap-2">
        <Description className="whitespace-nowrap font-[400]">
          {`기온에 맞는 옷을 추천해드릴게요: `}
        </Description>
        <div className="flex items-center gap-1.5">
          {keywords.map((title) => (
            <Pill
              key={title}
              selected={title === selectedKeyword}
              onClick={() => handleKeywordClick(title)}
              className="cursor-pointer"
            >
              {title}
            </Pill>
          ))}
        </div>
      </div>
      <ShoppingList
        isPriority
        selectedKeyword={selectedKeyword}
        shoppingList={clothesList}
      />
    </div>
  );
}
