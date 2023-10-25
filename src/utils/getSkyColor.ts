import {
  GetCurrentCondition,
  GetFiveDaysForecast,
} from '@/graphql/types/queryDataTypes';

const daytimeColor = {
  sunrise: 'to bottom, #1B2A4A, #7D6180',
  sunset: 'to bottom, #094F91, #E6D6C3',
  night: 'to bottom, #05051C, #334461',
  day: 'to bottom, #094F91, #ABC9E8',
  rain: 'to bottom, #485767, #485667',
};

export const getCurrentSkyColor = (
  getCurrentCondition: GetCurrentCondition,
  getFiveDaysForecast: GetFiveDaysForecast,
) => {
  const now = new Date().getTime();
  const isDayTime = getCurrentCondition.IsDayTime;

  const sunriseTime = new Date(
    getFiveDaysForecast?.DailyForecasts[0].Sun.Rise || 0,
  ).getTime();
  const sunsetTime = new Date(
    getFiveDaysForecast?.DailyForecasts[0].Sun.Set || 0,
  ).getTime();

  if (
    getCurrentCondition &&
    getCurrentCondition.PrecipitationSummary.PastHour.Metric.Value >= 2
  ) {
    return daytimeColor['rain'];
  }

  if (isDayTime && sunsetTime - now <= 1000 * 60 * 30) {
    return daytimeColor['sunset'];
  }

  if (
    !isDayTime &&
    sunsetTime - now > 0 &&
    sunriseTime - now <= 1000 * 60 * 30
  ) {
    return daytimeColor['sunrise'];
  }

  if (isDayTime) {
    return daytimeColor['day'];
  } else {
    return daytimeColor['night'];
  }
};

export const getDefaultSkyColor = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    return daytimeColor['day'];
  } else {
    return daytimeColor['night'];
  }
};
