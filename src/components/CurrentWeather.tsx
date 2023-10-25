import React from 'react';

import { DEFAULT_LOCATION } from '@/constants/location';
import {
  CurrentConditionData,
  FivedaysForecastData,
} from '@/graphql/types/queryDataTypes';

interface CurrentWeatherProps {
  currentConditionData: CurrentConditionData;
  fivedaysForecastData: FivedaysForecastData;
}

export default function CurrentWeather({
  currentConditionData,
  fivedaysForecastData,
}: CurrentWeatherProps) {
  const { cityName } = DEFAULT_LOCATION;
  const currentTemperature =
    currentConditionData.getCurrentCondition.Temperature.Metric.Value;
  const weatherText = currentConditionData.getCurrentCondition.WeatherText;

  const maxTemperature = Math.round(
    fivedaysForecastData.getFiveDaysForecast.DailyForecasts[0].Temperature
      .Maximum.Value,
  );
  const minTemperature = Math.round(
    fivedaysForecastData.getFiveDaysForecast.DailyForecasts[0].Temperature
      .Minimum.Value,
  );

  return (
    <div className="flex flex-col items-center space-y-1 mb-14">
      <h1 className="text-4xl shadowed-text">{cityName}</h1>
      <h2 className="text-7xl shadowed-text font-extralight">
        {Math.round(currentTemperature)}°
      </h2>
      <h3 className="text-xl shadowed-text">{weatherText}</h3>
      <span className="text-xl shadowed-text">{`최고${maxTemperature}° 최저${minTemperature}°`}</span>
    </div>
  );
}
