import { Temperature } from '@/graphql/types/queryDataTypes';

export const matchClothesByTemperature = (temperature: number) => {
  if (temperature < 5) {
    return ['패딩', '코트', '목도리'];
  } else if (temperature < 9) {
    return ['코트', '가죽자켓', '플리스'];
  } else if (temperature < 12) {
    return ['트렌치코트', '야상', '자켓'];
  } else if (temperature < 17) {
    return ['니트', '가디건', '맨투맨'];
  } else if (temperature < 21) {
    return ['후드티', '바람막이', '슬랙스'];
  } else if (temperature < 25) {
    return ['얇은 셔츠', '블라우스', '청바지'];
  } else if (temperature < 28) {
    return ['얇은 셔츠', '반바지'];
  } else {
    return ['민소매', '린넨'];
  }
};

export const getKeywordsByTemperature = (temperature: Temperature) => {
  const { Maximum, Minimum } = temperature;

  const maxTemperature = Math.round(Maximum.Value);
  const minTemperature = Math.round(Minimum.Value);

  const matchKeywordsByTemperature = [
    {
      value: minTemperature,
      keywords: matchClothesByTemperature(minTemperature),
    },
    {
      value: maxTemperature,
      keywords: matchClothesByTemperature(maxTemperature),
    },
  ];

  return matchKeywordsByTemperature;
};
