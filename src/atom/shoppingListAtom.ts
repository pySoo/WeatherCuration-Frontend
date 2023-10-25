// states/counterState.js
import { atom } from 'recoil';

import { ShoppingListType } from '@/graphql/types/queryDataTypes';

export const shoppingListAtom = atom<ShoppingListType[]>({
  key: 'shoppingListState',
  default: [],
});
