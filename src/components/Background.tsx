import React, { type ReactNode, useEffect } from 'react';

import {
  CurrentConditionData,
  FivedaysForecastData,
} from '@/graphql/types/queryDataTypes';
import { getCurrentSkyColor, getDefaultSkyColor } from '@/utils/getSkyColor';

import { Cloud, Rain, Snow, Stars, Sun } from './Weather/index';

type BackgroundProps = {
  currentConditionData?: CurrentConditionData;
  fivedaysForecastData?: FivedaysForecastData;
  children: ReactNode;
};

export default function Background({
  currentConditionData,
  fivedaysForecastData,
  children,
}: BackgroundProps) {
  console.log(currentConditionData, fivedaysForecastData);
  const skyColor =
    currentConditionData && fivedaysForecastData
      ? getCurrentSkyColor(
          currentConditionData.getCurrentCondition,
          fivedaysForecastData.getFiveDaysForecast,
        )
      : getDefaultSkyColor();

  const isDayTime = currentConditionData?.getCurrentCondition.IsDayTime;

  const UVindex = currentConditionData?.getCurrentCondition.UVIndex;
  const cloudCover = currentConditionData?.getCurrentCondition.CloudCover;
  const precipitationType =
    currentConditionData?.getCurrentCondition.PrecipitationType;

  useEffect(() => {
    console.log('mounted sky ', skyColor);
    document.body.style.background = `linear-gradient(${skyColor})`;
  }, []);

  console.log('rendered sky', skyColor);

  return (
    <div
      className="w-full text-lg overflow-scroll sm:overflow-y-hidden relative"
      style={{
        height: currentConditionData && fivedaysForecastData ? 'auto' : '100%',
        background: `linear-gradient(${skyColor})`,
      }}
    >
      {isDayTime && <Sun UVindex={UVindex ?? 0} />}
      {!isDayTime && <Stars />}
      {cloudCover && cloudCover > 30 && <Cloud cloudCover={cloudCover} />}
      {precipitationType === 'Rain' && <Rain />}
      {precipitationType === 'Snow' && <Snow />}
      {children}
    </div>
  );
}
