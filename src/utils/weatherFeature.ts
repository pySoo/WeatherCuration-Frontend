import { DailyForecasts } from '@/graphql/types/queryDataTypes';
import { WeatherFeatureType, WeatherKeywordType } from '@/types/weather';

export const matchKeywordsByFeature = (weatherFeatures: WeatherFeatureType) => {
  const keywordList: WeatherKeywordType[] = [];

  if (weatherFeatures.bigTempDiff) {
    keywordList.push({
      keyword: '큰 일교차에 주의하세요',
      description: '감기 예방 비타민! 🍋',
      query: '비타민',
    });
  }

  if (weatherFeatures.possibleToRain) {
    keywordList.push({
      keyword: '비가 올 수 있어요',
      description: '소나기에 대비하세요 ☔️',
      query: '휴대용 우산',
    });
  }

  if (weatherFeatures.minTemperature <= 10) {
    keywordList.push({
      keyword: '10도 이하로 쌀쌀해져요',
      description: '면역력을 키워볼까요? 💪',
      query: '홍삼',
    });
  } else if (weatherFeatures.minTemperature <= 15) {
    keywordList.push({
      keyword: '15도 이하 환절기예요',
      description: '건조해진 피부를 위해 준비했어요 🙌',
      query: '영양크림',
    });
  } else if (weatherFeatures.minTemperature <= 20) {
    keywordList.push({
      keyword: '20도 이하 환절기예요',
      description: '환절기 대비 수분 보충하세요 🙌',
      query: '수분크림',
    });
  }

  if (keywordList.length < 3) {
    keywordList.push({
      keyword: '건조한 환절기',
      description: '건조해진 손을 촉촉하게 💧',
      query: '핸드크림',
    });
  }

  return keywordList;
};

export const getKeywordsByForecast = (forecasts: DailyForecasts[]) => {
  const weatherFeatures: WeatherFeatureType = {
    bigTempDiff: false,
    possibleToRain: false,
    minTemperature: 40,
  };

  forecasts.forEach((forecast) => {
    if (
      Math.abs(
        forecast.Temperature.Maximum.Value - forecast.Temperature.Minimum.Value,
      ) >= 10
    ) {
      weatherFeatures.bigTempDiff = true;
    }

    if (
      forecast.Day.RainProbability >= 60 ||
      forecast.Night.RainProbability >= 60
    ) {
      weatherFeatures.possibleToRain = true;
    }

    if (
      weatherFeatures.minTemperature === null ||
      forecast.Temperature.Minimum.Value < weatherFeatures.minTemperature
    ) {
      weatherFeatures.minTemperature = forecast.Temperature.Minimum.Value;
    }
  });

  return matchKeywordsByFeature(weatherFeatures);
};
