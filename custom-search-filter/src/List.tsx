import { ReactNode, useEffect, useMemo } from "react";

import { ItemsTypes } from "./App";
import styles from "./list.module.css";

type itemsProps = {
  items: ReactNode[];
  query: string;
};

type filteredItemsType = {
  item: string;
  index: number;
};

const List = ({ items, query }: itemsProps) => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item?.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  return (
    <>
      <h3 className={styles.listHeader}>Items</h3>
      <ul className={styles.styledUl}>
        {filteredItems &&
          filteredItems?.map((item, index) => {
            return (
              <li className={styles.listItems} key={index}>
                {item}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default List;
