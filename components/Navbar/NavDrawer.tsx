import React, { useEffect } from "react";
import Portal from "../Util/Portal";
import { CSSTransition } from "react-transition-group";

interface Props {
  show: boolean;
  onClose: () => any;
}

export default function NavDrawer({ show, onClose }: Props) {
  useEffect(
    function toggleScroll() {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
      return () => {
        document.body.style.overflow = "scroll";
      };
    },
    [show]
  );

  return (
    <Portal rootId="drawer">
      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={show}
        timeout={300}
        classNames={"modal-fade"}
      >
        <div className="fixed inset-0">
          <div
            className="abolute h-full w-full cursor-pointer"
            onClick={onClose}
          />
          <div className="h-full w-[70%] max-w-[400px] absolute inset-y-0 right-0 bg-light"></div>
        </div>
      </CSSTransition>
    </Portal>
  );
}
