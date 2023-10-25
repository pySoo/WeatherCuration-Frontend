import { atom } from 'recoil';

import { WeatherAtomType } from '@/types/weather';

export const weatherAtom = atom<WeatherAtomType>({
  key: 'weatherState',
  default: {
    temperatureKeywords: [],
    weatherKeywords: [],
  },
});
