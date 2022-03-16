import React, { useMemo, useRef, useState } from "react";
import { TabItem } from "./types";
import classes from "./styles.module.scss";
import useScreen from "../../hooks/useScreen";

interface Props {
  items: Omit<TabItem, "content">[];
  onSelectTab: (index: number, label: string) => any;
}

export default function Tabs({ items, onSelectTab }: Props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { isMd } = useScreen();

  const handleTabSelect = (idx: number, label: string) => {
    onSelectTab(idx, label);
    setSelectedTabIndex(idx);
  };

  const listRef = useRef<HTMLUListElement>(null);

  const [indicatorXOffset, indicatorXWidth] = useMemo(() => {
    if (!listRef.current) {
      return [0, 0];
    }
    if (isMd) {
      return [0, 3];
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

    const extra = (selectedTabIndex + 1) * 1; /*px*/

    return [distance, curWidth + extra];
  }, [selectedTabIndex, isMd]);

  const [indicatorYOffset, indicatorYHeight] = useMemo(() => {
    if (!listRef.current) {
      return [0, 0];
    }
    if (!isMd) {
      return [0, 3];
    }
    let distance = 0;
    let selected: any = listRef.current.childNodes[selectedTabIndex];
    let curHeight = selected.offsetHeight;

    while (selected?.previousSibling) {
      const prevHeight = selected.previousSibling.offsetHeight;
      console.log("prevHeigth", prevHeight);
      distance += selected.previousSibling.offsetHeight;
      selected = selected.previousSibling;
    }

    const extra = (selectedTabIndex + 1) * 1; /*px*/

    return [distance, curHeight + extra];
  }, [selectedTabIndex, isMd]);

  const shouldNotSetTop = indicatorYOffset === 0 && indicatorYHeight === 3;

  console.log("Y::", indicatorYOffset, indicatorYHeight);
  console.log("X::", indicatorXOffset, indicatorXWidth);
  console.log("isMd", isMd);

  return (
    <div
      className={
        `mb-8 relative overflow-x-scroll hide-scrollbar ` +
        (isMd ? classes.track__vertical : classes.track)
      }
    >
      <ul ref={listRef} className="flex md:flex-col md:mr-8">
        {items.map((item, idx) => (
          <li
            onClick={() => handleTabSelect(idx, item.label)}
            className={`px-6 py-4 cursor-pointer ${
              selectedTabIndex === idx
                ? "text-secondary bg-primary-light"
                : "text-gray"
            } `}
            key={item.label}
          >
            <p>{item.label}</p>
          </li>
        ))}
      </ul>

      <div
        style={{
          left: indicatorXOffset,
          width: indicatorXWidth,
          top: shouldNotSetTop ? undefined : indicatorYOffset,
          height: indicatorYHeight,
        }}
        className="absolute bottom-0 bg-secondary transition-all ease-in-out duration-500"
      />
    </div>
  );
}
