import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

function Projects() {
    const containerRef = useRef(null);
    const [currentBox, setCurrentBox] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;
                const containerHeight = containerRef.current.offsetHeight;

                // Check if the container is within the viewport
                if (containerTop <= viewportHeight / 2 && containerTop > -containerHeight) {
                    // Calculate the progress based on how far the container has scrolled within the viewport
                    const scrollProgress = Math.min(
                        Math.max(0, (viewportHeight / 2 - containerTop) / containerHeight),
                        1
                    );

                    // Determine which box to display based on scroll progress
                    const newCurrentBox = Math.min(Math.floor(scrollProgress * 5), 4);
                    setCurrentBox(newCurrentBox);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="boxes">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`box box${index} ${index === currentBox ? "active" : ""}`}
                    />
                ))}
            </div>
            {/* Page continues here */}
        </div>
    );
}

export default Projects;
