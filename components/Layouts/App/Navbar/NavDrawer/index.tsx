import React, { useEffect } from "react";
import Portal from "../../../../Util/Portal";
import { CSSTransition } from "react-transition-group";
import ContentContainer from "./ContentContainer";
import { IoMdClose } from "react-icons/io";
import DrawerItem from "./DrawerItem";
import Button from "../../../../Button";
import SocialItem from "./SocialItem";
import { DRAWER_ITEMS, SOCIAL_ITEMS } from "../../../../../data";

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
          <ContentContainer>
            <IoMdClose
              size={28}
              onClick={onClose}
              className="text-light ml-auto cursor-pointer hover:text-secondary transition"
            />
            <div className="space-y-[5vh] mt-[18vh] text-right">
              {DRAWER_ITEMS.map((item, idx) => (
                <DrawerItem key={item} item={item} count={idx + 1} />
              ))}
              <Button className="px-14" size="lg">
                CV
              </Button>
            </div>
            <div className="flex gap-12 justify-end mt-[18vh]">
              {SOCIAL_ITEMS.map((Item) => (
                <SocialItem Item={Item} key={Item.url} />
              ))}
            </div>
          </ContentContainer>
        </div>
      </CSSTransition>
    </Portal>
  );
}
