import { ApolloError, useQuery } from '@apollo/client';
import { useSetRecoilState } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import Background from '@/components/Background';
import Loader from '@/components/Common/Loader';
import WeatherCuration from '@/components/WeatherCuration';
import { POLL_INTERVAL_TIME } from '@/constants/graphql';
import { DEFAULT_LOCATION } from '@/constants/location';
import {
  CURRENT_CONDITIONS_QUERY,
  FIVEDAYS_FORECAST_QUERY,
} from '@/graphql/client/queryClient';
import {
  CurrentConditionData,
  FivedaysForecastData,
  LocationKey,
} from '@/graphql/types/queryDataTypes';
import { matchClothesByTemperature } from '@/utils/matchClothes';
import { getKeywordsByForecast } from '@/utils/weatherFeature';

export default function Main() {
  const { locationKey } = DEFAULT_LOCATION;
  const setWeatherState = useSetRecoilState(weatherAtom);

  const { data: currentConditionData, error: currentConditionError } = useQuery<
    CurrentConditionData,
    LocationKey
  >(CURRENT_CONDITIONS_QUERY, {
    variables: { locationKey },
    pollInterval: POLL_INTERVAL_TIME,
  });

  const { data: fivedaysForecastData, error: fivedaysForecastError } = useQuery<
    FivedaysForecastData,
    LocationKey
  >(FIVEDAYS_FORECAST_QUERY, {
    variables: { locationKey },
    pollInterval: POLL_INTERVAL_TIME,
    onCompleted: (data) => {
      const forecasts = data.getFiveDaysForecast.DailyForecasts;

      // 최저 최고 온도 구하기
      const { Maximum, Minimum } = forecasts[0].Temperature;

      const maxTemperature = Math.round(Maximum.Value);
      const minTemperature = Math.round(Minimum.Value);

      const updatedTemperature = [
        {
          value: minTemperature,
          keywords: matchClothesByTemperature(minTemperature),
        },
        {
          value: maxTemperature,
          keywords: matchClothesByTemperature(maxTemperature),
        },
      ];

      // 5일간의 예보 중 특이점들을 모아서 저장

      setWeatherState({
        temperatureKeywords: updatedTemperature,
        weatherKeywords: getKeywordsByForecast(forecasts),
      });
    },
  });

  const allQuriesCompleted = currentConditionData && fivedaysForecastData;

  const queryErrors = [currentConditionError, fivedaysForecastError].filter(
    Boolean,
  );

  if (queryErrors.length > 0) {
    const firstError = queryErrors[0];
    throw new ApolloError(firstError!);
  }

  return (
    <div className="w-full h-screen relative">
      <Background
        currentConditionData={currentConditionData}
        fivedaysForecastData={fivedaysForecastData}
      >
        {allQuriesCompleted ? (
          <WeatherCuration currentConditionData={currentConditionData} />
        ) : (
          <Loader />
        )}
      </Background>
    </div>
  );
}
