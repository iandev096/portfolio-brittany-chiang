import React from "react";
import { BsCaretRight } from "react-icons/bs";

interface Props {
  role: string;
  place: string;
  timePeriod: string;
  responsibilities: string[];
}

export default function TabContent({
  role,
  place,
  timePeriod,
  responsibilities,
}: Props) {
  return (
    <div>
      <div>
        <h2 className="text-xl text-gray-extra-light">
          {role} <span className="text-secondary font-medium">@{place}</span>
        </h2>
        <p className="font-mono text-sm">{timePeriod}</p>
      </div>

      <div className="text-sm mt-8">
        <ul className="space-y-4">
          {responsibilities.map((responsibility) => (
            <li className="flex items-baseline" key={responsibility}>
              <span className="mr-4">
                <BsCaretRight size={10} className="text-secondary" />
              </span>
              <p>{responsibility}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
