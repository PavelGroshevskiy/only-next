import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const updateHtmlFontSize = () => {
      const DESIGN_WIDTH_PX = 1920;
      const DEFAULT_FONT_SIZE_PX = 10;
      document.documentElement.style.fontSize =
        `${window.innerWidth / DESIGN_WIDTH_PX * DEFAULT_FONT_SIZE_PX}px`;
    };
    window.addEventListener('resize', updateHtmlFontSize);
    updateHtmlFontSize();
    return () => window.removeEventListener('resize', updateHtmlFontSize);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp