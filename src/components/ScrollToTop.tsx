import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Garante que toda navegação de rota (e refresh) volte ao topo da página.
 * Respeita âncoras (#hash) — nesse caso, não força o scroll.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
