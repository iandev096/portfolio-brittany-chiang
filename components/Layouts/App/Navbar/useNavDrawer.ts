import { useCallback, useEffect, useRef, useState } from "react";

export default function useNavDrawer(
  onDrawerToggled: (shown: boolean) => void
) {
  const [drawerShown, setDrawerShown] = useState(false);
  const staticOnDrawerToggled = useRef(onDrawerToggled).current;

  useEffect(() => {
    if (drawerShown) {
      staticOnDrawerToggled(true);
    } else {
      staticOnDrawerToggled(false);
    }
  }, [drawerShown, staticOnDrawerToggled]);

  const toggleDrawer = useCallback((shown: boolean) => {
    setDrawerShown(shown);
  }, []);

  return { drawerShown, toggleDrawer };
}
