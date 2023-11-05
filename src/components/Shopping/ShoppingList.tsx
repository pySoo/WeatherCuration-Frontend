import { ShoppingListType } from '@/graphql/types/queryDataTypes';

import ShoppingLoader from '../Common/ShoppingLoader';
import ShoppingItem from './ShoppingItem';

type ShoppingListProps = {
  isPriority?: boolean;
  selectedKeyword: string;
  shoppingList?: ShoppingListType[];
};

export default function ShoppingList({
  isPriority,
  selectedKeyword,
  shoppingList,
}: ShoppingListProps) {
  const shoppingItem = shoppingList?.find(
    (item) => item.keyword === selectedKeyword,
  )?.shoppingData;

  return (
    <div className="grid-item pt-4 pb-3 h-[314px] ">
      <div className="flex w-full overflow-scroll scrollbar-hide h-[284px]">
        <div className="w-full gap-3 snap-x snap-mandatory">
          {shoppingItem ? (
            <div className="px-3.5 flex items-center h-full w-fit gap-3">
              {shoppingItem.map((item) => (
                <ShoppingItem
                  key={`${item.title}-${item.lprice}`}
                  shoppingItem={item}
                  isPriority={isPriority}
                />
              ))}
            </div>
          ) : (
            <ShoppingLoader />
          )}
        </div>
      </div>
    </div>
  );
}
