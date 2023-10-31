import React, { type ReactNode, useEffect, useRef } from 'react';

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
  const backgroundRef = useRef<HTMLDivElement>(null);

  const skyColor =
    currentConditionData && fivedaysForecastData
      ? getCurrentSkyColor(
          currentConditionData.getCurrentCondition,
          fivedaysForecastData.getFiveDaysForecast,
        )
      : getDefaultSkyColor();
  const isDayTime = currentConditionData?.getCurrentCondition.IsDayTime;

  const UVindex = currentConditionData?.getCurrentCondition.UVIndex || 0;
  const cloudCover = currentConditionData?.getCurrentCondition.CloudCover || 0;
  const precipitationType =
    currentConditionData?.getCurrentCondition.PrecipitationType;

  useEffect(() => {
    if (backgroundRef.current !== null) {
      backgroundRef.current.style.background = `linear-gradient(${skyColor})`;
    }
    console.log('sky color: ', skyColor);
  }, [currentConditionData, fivedaysForecastData]);

  return (
    <div
      className="w-full text-lg overflow-scroll sm:overflow-y-hidden relative"
      ref={backgroundRef}
      style={{
        height: currentConditionData && fivedaysForecastData ? 'auto' : '100%',
      }}
    >
      {isDayTime && <Sun UVindex={UVindex} />}
      {!isDayTime && <Stars />}
      {cloudCover > 30 && <Cloud cloudCover={cloudCover} />}
      {precipitationType === 'Rain' && <Rain />}
      {precipitationType === 'Snow' && <Snow />}
      {children}
    </div>
  );
}
