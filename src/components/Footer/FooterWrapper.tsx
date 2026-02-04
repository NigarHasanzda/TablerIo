'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from './Footer';

export default function FooterWrapper() {
    const pathname = usePathname();
    const [hideFooter, setHideFooter] = useState(false);
    const hiddenPrefixes = ['/errors', '/error', '/auth'];

    useEffect(() => {
        const checkHide = () => {
            const is404 =
                document.title.toLowerCase().includes('404') ||
                document.querySelector('meta[name="robots"]')?.getAttribute('content') === 'noindex';

            const isHiddenUrl = hiddenPrefixes.some(prefix => pathname.startsWith(prefix));

            setHideFooter(is404 || isHiddenUrl);
        };
        setTimeout(checkHide, 10);
    }, [pathname]);

    if (hideFooter) return null;

    return <Footer />;
}
