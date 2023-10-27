import React, { type ReactNode } from 'react';

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
