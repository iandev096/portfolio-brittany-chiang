import React, { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({
  rootId,
  children,
}: {
  rootId: string;
  children: React.ReactNode;
}) => {
  const target = useRef<any>(null);

  useEffect(() => {
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement("div");
      container.setAttribute("id", rootId);
      document.body.appendChild(container);
    }
    if (!target.current) {
      target.current = document.createElement("div");
    }
    container.appendChild(target.current as HTMLDivElement);

    const targetElem = target.current;

    return () => {
      if (targetElem) {
        targetElem.remove();
        if (container?.childNodes.length === 0) {
          container.remove();
        }
      }
    };
  }, [rootId]);

  const portal = useMemo(() => {
    if (target.current) {
      return ReactDOM.createPortal(children, target.current);
    }
    return null;
  }, [children]);

  return portal;
};

export default Portal;
