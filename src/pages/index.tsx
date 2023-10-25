import { ApolloError, useQuery } from '@apollo/client';

import Background from '@/components/Background';
import Loader from '@/components/Common/Loader';
import WeatherCuration from '@/components/WeatherCuration';
import { POLL_INTERVAL_TIME } from '@/constants/graphql';
import { DEFAULT_LOCATION } from '@/constants/location';
import { CURRENT_CONDITIONS_QUERY } from '@/graphql/client/queryClient';
import {
  CurrentConditionData,
  LocationKey,
} from '@/graphql/types/queryDataTypes';

export default function Main() {
  const { locationKey } = DEFAULT_LOCATION;

  const { data: currentConditionData, error: currentConditionError } = useQuery<
    CurrentConditionData,
    LocationKey
  >(CURRENT_CONDITIONS_QUERY, {
    variables: { locationKey },
    pollInterval: POLL_INTERVAL_TIME,
  });

  const allQuriesCompleted = currentConditionData;

  const queryErrors = [currentConditionError].filter(Boolean);

  if (queryErrors.length > 0) {
    const firstError = queryErrors[0];
    throw new ApolloError(firstError!);
  }

  return (
    <div className="w-full h-screen relative">
      <Background currentConditionData={currentConditionData}>
        {allQuriesCompleted ? (
          <WeatherCuration currentConditionData={currentConditionData} />
        ) : (
          <Loader />
        )}
      </Background>
    </div>
  );
}
