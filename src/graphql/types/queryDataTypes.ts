export type LocationKey = {
  locationKey: string;
};

export type Keyword = {
  keyword: string;
};

export type ShoppingItemType = {
  title: string;
  image: string;
  link: string;
  lprice: string;
};

export type ShoppingListType = {
  keyword: string;
  shoppingData: ShoppingItemType[];
};

export type ShoppingListData = {
  getShoppingList: ShoppingListType;
};

type Metric = {
  Metric: {
    Value: number;
    UnitType: number;
    Unit: string;
    Phase?: string;
  };
};

type MetricValue = {
  Value: number;
  UnitType: number;
  Unit: string;
  Phase?: string;
};

export type Temperature = {
  Maximum: MetricValue;
  Minimum: MetricValue;
};

type DayNight = {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationProbability: number;
  CloudCover: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
};

type Sun = {
  Rise: string;
  Set: string;
};

export type PrecipitationSummary = {
  PastHour: Metric;
  Past3Hours: Metric;
  Past6Hours: Metric;
  Past9Hours: Metric;
  Past12Hours: Metric;
  Past18Hours: Metric;
  Past24Hours: Metric;
};

export type GetCurrentCondition = {
  IsDayTime: boolean;
  CloudCover: number;
  UVIndex: number;
  PrecipitationType: string;
  PrecipitationSummary: PrecipitationSummary;
  Temperature: Metric;
  WeatherText: string;
  RelativeHumidity: number;
};

export type CurrentConditionData = {
  getCurrentCondition: GetCurrentCondition;
};

export type DailyForecasts = {
  Date: string;
  Temperature: Temperature;
  Day: DayNight;
  Night: DayNight;
  Sun: Sun;
};

export type GetFiveDaysForecast = {
  DailyForecasts: DailyForecasts[];
};

export type FivedaysForecastData = {
  getFiveDaysForecast: GetFiveDaysForecast;
};
