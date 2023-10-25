import { ShoppingListType } from '@/graphql/types/queryDataTypes';

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
    <div className="grid-item pt-4 pb-3 h-[314px]">
      <div className=" flex w-full overflow-scroll scrollbar-hide h-[284px] justify-center">
        <div className="flex items-center gap-3 snap-x snap-mandatory px-3.5">
          {shoppingItem &&
            shoppingItem.map((item) => (
              <ShoppingItem
                key={item.title}
                shoppingItem={item}
                isPriority={isPriority}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
