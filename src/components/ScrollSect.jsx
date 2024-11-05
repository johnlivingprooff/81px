import React, { useRef } from 'react';
import '../styles/ScrollSection.css';

function ScrollSection() {
    const scrollContainer = useRef(null);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        scrollContainer.current.scrollLeft = scrollTop;  // Sync vertical scroll to horizontal
    };

    return (
        <div className="vertical-scroll" onScroll={handleScroll}>
            <div ref={scrollContainer} className="horizontal-container">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="card">
                        <h2>Card {index + 1}</h2>
                        <p>Content for card {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollSection;
