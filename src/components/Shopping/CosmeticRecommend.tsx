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
import ShoppingList from './ShoppingList';

export default function CosmeticRecommend() {
  const [cosmeticList, setCosmeticList] = useState<ShoppingListType[]>([]);

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
      setCosmeticList(
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
            className="cursor-default font-semibold py-1"
            bgColor="#03c75a"
          >
            {keyword}
          </Pill>
        ))}
      </div>
      <div className="flex flex-col gap-[40px]">
        {weatherKeywords.map(({ description, query }) => (
          <div key={description}>
            <Description className="my-3 text-white text-[21px]">
              {description}
            </Description>
            <ShoppingList selectedKeyword={query} shoppingList={cosmeticList} />
          </div>
        ))}
      </div>
    </div>
  );
}
