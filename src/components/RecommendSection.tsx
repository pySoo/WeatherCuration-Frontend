import { useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import { SHOPPING_LIST_QUERY } from '@/graphql/client/queryClient';
import {
  ShoppingListData,
  ShoppingListType,
} from '@/graphql/types/queryDataTypes';

import SectionBorder from './Common/SectionBorder';
import ClothesRecommend from './Shopping/ClothesRecommend';
import WeatherPredictFeature from './Weather/WeatherPredictFeature';

export default function RecommendSection() {
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
    <>
      <ClothesRecommend clothesList={clothesList} />
      <SectionBorder />
      <WeatherPredictFeature />
    </>
  );
}
