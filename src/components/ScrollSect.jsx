import React, { useRef, useEffect } from 'react';
import '../styles/ScrollSection.css';

function ScrollSection() {
    const scrollContainer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainer.current) {
                const scrollTop = window.scrollY;  // Get vertical scroll position
                scrollContainer.current.scrollLeft = scrollTop;  // Set horizontal scroll
            }
        };


        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            },
            { threshold: 1.0 }
        );

        if (scrollContainer.current) {
            observer.observe(scrollContainer.current);
        }

        return () => {
            if (scrollContainer.current) {
                observer.unobserve(scrollContainer.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <div className="horizontal-scroll-section" ref={scrollContainer}>
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
            {/* Add additional cards as needed */}
        </div>
    );
}

export default ScrollSection;
