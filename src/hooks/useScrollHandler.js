import { useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

// CUSTOM HOOK FOR CHANGING FLEX POSITION DEPENDANT OF THE USERS SCROLL POSITION

const useScrollHandler = (elementId) => {
  const [isFixed, setIsFixed] = useState(false);
  const isMdScreen = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    const handleScroll = () => {
      const flexElement = document.getElementById(elementId);
      const flexElementFix = document.getElementById('fixedFlex');

      if (!flexElement || !flexElementFix) return;

      const fixRect = flexElementFix.getBoundingClientRect();
      const flexRect = flexElement.getBoundingClientRect();
      const flexTop = flexRect.top;
      const flexEnd = flexRect.bottom;
      const fixHeight = fixRect.height;
      let maxScroll = flexEnd - fixHeight;
      setIsFixed(flexTop <= 0 && maxScroll >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId, isMdScreen]);
  return [isFixed, isMdScreen];
};

export default useScrollHandler;
