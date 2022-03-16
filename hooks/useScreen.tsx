import { useMediaQuery } from "react-responsive";

export default function useScreen() {
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2xl = useMediaQuery({ query: "(min-width: 1536px)" });

  return { isSm, isMd, isLg, isXl, is2xl };
}
