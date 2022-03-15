import React, { useMemo, useRef, useState } from "react";
import { TabItem } from "./types";
import classes from "./styles.module.scss";

interface Props {
  items: Omit<TabItem, "content">[];
  onSelectTab: (index: number, label: string) => any;
}

export default function Tabs({ items, onSelectTab }: Props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (idx: number, label: string) => {
    onSelectTab(idx, label);
    setSelectedTabIndex(idx);
  };

  const listRef = useRef<HTMLUListElement>(null);
  let [indicatorLeft, indicatorWidth] = useMemo(() => {
    if (!listRef.current) {
      return [0, 0];
    }
    let distance = 0;
    let selected: any = listRef.current.childNodes[selectedTabIndex];
    let curWidth = selected.offsetWidth;

    while (selected?.previousSibling) {
      const prevWidth = selected.previousSibling.offsetWidth;
      console.log("prevWidth", prevWidth);
      distance += selected.previousSibling.offsetWidth;
      selected = selected.previousSibling;
    }

    const extra = (selectedTabIndex + 1) * 1;

    return [distance, curWidth + extra];
  }, [selectedTabIndex]);

  console.log(indicatorLeft);

  return (
    <div
      className={
        `mb-5 relative overflow-x-scroll hide-scrollbar ` + classes.track
      }
    >
      <ul ref={listRef} className="flex">
        {items.map((item, idx) => (
          <li
            onClick={() => handleTabSelect(idx, item.label)}
            className={`px-6 py-4 cursor-pointer ${
              selectedTabIndex === idx ? "text-secondary" : "text-gray"
            } `}
            key={item.label}
          >
            <p>{item.label}</p>
          </li>
        ))}
      </ul>

      <div
        style={{ left: indicatorLeft, width: indicatorWidth }}
        className="absolute bottom-0 h-[3px] bg-secondary transition-all ease-in-out duration-500"
      />
    </div>
  );
}
