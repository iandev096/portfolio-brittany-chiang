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
    <div className="border border-light">
      <div>
        <h2>
          {role} <span>@{place}</span>
        </h2>
        <p>{timePeriod}</p>
      </div>

      <div>
        <ul>
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>
              <span>
                <BsCaretRight size={8} className="text-secondary" />
              </span>
              <p>{responsibility}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
