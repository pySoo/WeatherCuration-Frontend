export const matchClothesByTemperature = (temperature: number) => {
  if (temperature < 5) {
    return ['패딩', '코트', '목도리'];
  } else if (temperature < 9) {
    return ['코트', '가죽자켓', '플리스'];
  } else if (temperature < 12) {
    return ['트렌치코트', '야상', '자켓'];
  } else if (temperature < 17) {
    return ['니트', '가디건', '맨투맨'];
  } else if (temperature < 20) {
    return ['후드티', '바람막이', '슬랙스'];
  } else if (temperature < 23) {
    return ['셔츠', '블라우스', '면 바지'];
  } else if (temperature < 28) {
    return ['얇은 셔츠', '셔츠'];
  } else {
    return ['민소매', '린넨'];
  }
};
