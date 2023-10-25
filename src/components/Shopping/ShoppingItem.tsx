import Image from 'next/image';

import { ShoppingItemType } from '@/graphql/types/queryDataTypes';
import {
  convertTextByPriceFormat,
  removeBoldMarkdown,
} from '@/utils/convertText';

type ShoppingItemProps = {
  isPriority?: boolean;
  shoppingItem: ShoppingItemType;
};

export default function ShoppingItem({
  isPriority,
  shoppingItem,
}: ShoppingItemProps) {
  const { title, lprice, link, image } = shoppingItem;

  return (
    <div className="w-[200px] h-full shrink-0 overflow-hidden snap-center">
      <a
        href={link}
        target="_blank"
        className="cursor-pointer active:opacity-70"
      >
        <Image
          src={image}
          alt="shopping-item"
          priority={isPriority}
          width={200}
          height={200}
          className="mb-2 w-full h-[200px] rounded-xl object-cover shadow-sm"
        />
        <span className="font-bold text-base">{`${convertTextByPriceFormat(
          lprice,
        )}원`}</span>
        <p className="line-clamp-2 text-base">{removeBoldMarkdown(title)}</p>
      </a>
    </div>
  );
}
