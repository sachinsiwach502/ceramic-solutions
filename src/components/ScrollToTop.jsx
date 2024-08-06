import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-40">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-red text-white p-2 rounded-full shadow-lg hover:bg-rose-500 ease-linear duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 border-2 border-red"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
