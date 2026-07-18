import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to hash targets after client-side navigation (e.g. /#projects). */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname, hash]);
}
