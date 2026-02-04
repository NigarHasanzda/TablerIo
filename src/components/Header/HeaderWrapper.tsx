'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const hiddenPrefixes = ['/errors', '/error', '/auth'];

  useEffect(() => {
    const checkHide = () => {
      const is404 =
        document.querySelector('meta[name="robots"]')?.getAttribute('content') === 'noindex' ||
        document.title.toLowerCase().includes('404');

      const isHiddenUrl = hiddenPrefixes.some(prefix => pathname.startsWith(prefix));

      setHideHeader(is404 || isHiddenUrl);
    };
    setTimeout(checkHide, 50);
  }, [pathname]);

  if (hideHeader) return null;

  return <Header />;
}
