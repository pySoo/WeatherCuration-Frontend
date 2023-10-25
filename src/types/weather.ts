export type TemperatureType = {
  value: number;
  keywords: string[];
};

export type WeatherFeatureType = {
  bigTempDiff: boolean;
  possibleToRain: boolean;
  minTemperature: number;
};

export type WeatherKeywordType = {
  keyword: string;
  description: string;
  query: string;
};

export type WeatherAtomType = {
  temperatureKeywords: TemperatureType[];
  weatherKeywords: WeatherKeywordType[];
};
