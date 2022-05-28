import React, { useMemo, useState } from "react";
import TabContent from "./TabContent";
import Tabs from "./Tabs";

interface Props {}

const EXP_ITEMS = [
  {
    label: "Expresspay",
    content: {
      role: "Frontend Engineer",
      place: "Expresspay",
      timePeriod: "2021 - 2022",
      responsibilities: ["Built the documentation site for the expressPay payment APIs.", "Built a developer dashboard that enables developers to manage access to the payment APIs.", "Working on a retail platform that allows retailers to sell expressPay's services."],
    },
  },
  {
    label: "Cyboticx",
    content: {
      role: "Software Developer",
      place: "Cyboticx",
      timePeriod: "2021",
      responsibilities: ["Worked closely with the team (two frontend developers, one UX/UI designer and the backend developer to build a mobile tourist application).", "Worked with the team to build a system (comprised of an admin dashboard, a web application and a mobile application) for managing the dispatch of nurses and medical equipments to various hospitals."],
    },
  },
  {
    label: "AppGig",
    content: {
      role: "Frontend Developer",
      place: "AppGig",
      timePeriod: "2019 - 2020",
      responsibilities: ["Built multiple websites.", "Built a mobile application for making errands and renting vehicles.", "Built a mobile application for laundry services.", "Built a vendor mobile application for ordering food."],
    },
  },
  {
    label: "Wekplace",
    content: {
      role: "Web Developer",
      place: "Wekplace",
      timePeriod: "2018 - 2019",
      responsibilities: ["Built a web platform for managing job openings and recruitments."],
    },
  },
 ];

export default function TabView({}: Props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const selectedTabContent = useMemo(
    () => EXP_ITEMS[selectedTabIndex].content,
    [selectedTabIndex]
  );

  return (
    <div className="md:flex">
      {/* TABS */}
      <Tabs items={EXP_ITEMS} onSelectTab={(index) => setSelectedTabIndex(index)} />
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
