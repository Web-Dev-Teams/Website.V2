import { useState, useEffect } from 'react';

const useResponsive = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmall;
};

export default useResponsive;
