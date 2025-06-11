import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Page scrolls on top when navigating to another page
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}