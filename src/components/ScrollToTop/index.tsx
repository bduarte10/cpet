import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const container = document.querySelector('.overflow-auto');
        if (container) {
            container.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
