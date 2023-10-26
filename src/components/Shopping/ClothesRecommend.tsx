import { useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import { SHOPPING_LIST_QUERY } from '@/graphql/client/queryClient';
import {
  ShoppingListData,
  ShoppingListType,
} from '@/graphql/types/queryDataTypes';
import { TemperatureType } from '@/types/weather';

import SubTitle from '../Common/SubTitle';
import ClothesByTemperature from './ClothesByTemperature';

export default function ClothesRecommend() {
  const [clothesList, setClothesList] = useState<ShoppingListType[]>([]);

  const weatherState = useRecoilValue(weatherAtom);

  const clothesKeywordsByTemperature = weatherState.temperatureKeywords
    .map((item) => item.keywords)
    .flat();

  const client = useApolloClient();

  useEffect(() => {
    Promise.all(
      clothesKeywordsByTemperature.map((keyword) =>
        client.query<ShoppingListData>({
          query: SHOPPING_LIST_QUERY,
          variables: { keyword },
        }),
      ),
    ).then((results) => {
      setClothesList(
        results.map((result) => {
          const { keyword, shoppingData } = result.data.getShoppingList;
          return { keyword, shoppingData };
        }),
      );
    });
  }, [weatherState.temperatureKeywords]);

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
