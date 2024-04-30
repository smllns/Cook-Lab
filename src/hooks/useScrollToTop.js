import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// CUSTOM HOOK FOR SMOOTH SCROLLING TO THE TOP OF THE PAGE

const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;
