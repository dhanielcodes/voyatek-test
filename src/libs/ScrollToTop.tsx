import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return null;
};

export default ScrollToTop;
