import { useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import { SHOPPING_LIST_QUERY } from '@/graphql/client/queryClient';
import {
  ShoppingListData,
  ShoppingListType,
} from '@/graphql/types/queryDataTypes';

import Description from '../Common/Description';
import Pill from '../Common/Pill';
import SubTitle from '../Common/SubTitle';
import ShoppingList from '../Shopping/ShoppingList';

export default function WeatherPredictFeature() {
  const [cosmeList, setCosmeList] = useState<ShoppingListType[]>([]);

  const weatherState = useRecoilValue(weatherAtom);
  const { weatherKeywords } = weatherState;

  const keywords = weatherKeywords.map((item) => item.query);

  const client = useApolloClient();

  useEffect(() => {
    Promise.all(
      keywords.map((keyword) =>
        client.query<ShoppingListData>({
          query: SHOPPING_LIST_QUERY,
          variables: { keyword },
        }),
      ),
    ).then((results) => {
      setCosmeList(
        results.map((result) => {
          const { keyword, shoppingData } = result.data.getShoppingList;
          return { keyword, shoppingData };
        }),
      );
    });
  }, [weatherState.weatherKeywords]);

  return (
    <div className="">
      <SubTitle>앞으로 5일간 날씨 특징</SubTitle>
      <div className="flex items-center gap-1.5 mb-5">
        {weatherKeywords.map(({ keyword }) => (
          <Pill
            key={keyword}
            className="bg-[#4377fd] hover:bg-[#4377fd] cursor-auto font-semibold"
          >
            {keyword}
          </Pill>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {weatherKeywords.map(({ description, query }) => (
          <div key={description}>
            <Description className="my-3 sm:text-xl text-white">
              {description}
            </Description>
            <ShoppingList selectedKeyword={query} shoppingList={cosmeList} />
          </div>
        ))}
      </div>
    </div>
  );
}
