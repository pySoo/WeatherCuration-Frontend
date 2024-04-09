import React from 'react';
import { useRecoilValue } from 'recoil';

import { weatherAtom } from '@/atom/weatherAtom';
import { DEFAULT_LOCATION } from '@/constants/location';
import { CurrentConditionData } from '@/graphql/types/queryDataTypes';

interface CurrentWeatherProps {
  currentConditionData: CurrentConditionData;
}

export default function CurrentWeather({
  currentConditionData,
}: CurrentWeatherProps) {
  const { cityName } = DEFAULT_LOCATION;

  const weatherState = useRecoilValue(weatherAtom);

  const currentTemperature =
    currentConditionData.getCurrentCondition.Temperature.Metric.Value;
  const weatherText = currentConditionData.getCurrentCondition.WeatherText;

  return (
    <div className="flex flex-col items-center space-y-1 mb-14">
      <h1 className="text-4xl shadowed-text">{cityName}</h1>
      <h2 className="text-7xl shadowed-text font-extralight">
        {Math.round(currentTemperature)}°
      </h2>
      <h3 className="text-xl shadowed-text">{weatherText}</h3>
      {weatherState.weatherKeywords.length > 0 && (
        <span className="text-xl shadowed-text">{`최고${weatherState.temperatureKeywords[1].value}° 최저${weatherState.temperatureKeywords[0].value}°`}</span>
      )}
    </div>
  );
}
