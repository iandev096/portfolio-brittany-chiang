import React, { useMemo, useState } from "react";
import TabContent from "./TabContent";
import Tabs from "./Tabs";
import { TabItem } from "./types";

interface Props {}

const ITEMS = [
  {
    label: "Wekplace",
    content: {
      role: "Engineer",
      place: "Wekplace",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
  {
    label: "AppGig",
    content: {
      role: "Engineer",
      place: "AppGig",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
  {
    label: "Cyboticx",
    content: {
      role: "Engineer",
      place: "Cyboticx",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
  {
    label: "ExpressPay",
    content: {
      role: "Engineer",
      place: "ExpressPay",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
  {
    label: "Mpharma",
    content: {
      role: "Engineer",
      place: "Mpharma",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
  {
    label: "Hotjar",
    content: {
      role: "Engineer",
      place: "Hotjar",
      timePeriod: "May 2018",
      responsibilities: ["Write code", "Debug code"],
    },
  },
];

export default function TabView({}: Props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const selectedTabContent = useMemo(
    () => ITEMS[selectedTabIndex].content,
    [selectedTabIndex]
  );

  return (
    <div className="md:flex">
      {/* TABS */}
      <Tabs items={ITEMS} onSelectTab={(index) => setSelectedTabIndex(index)} />
      {/* CONTENT */}
      <TabContent
        role={selectedTabContent.role}
        place={selectedTabContent.place}
        timePeriod={selectedTabContent.timePeriod}
        responsibilities={selectedTabContent.responsibilities}
      />
    </div>
  );
}
