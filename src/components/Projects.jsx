import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

function Projects() {
    const containerRef = useRef(null);
    const [currentBox, setCurrentBox] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBox(prevBox => (prevBox + 1) % 4);
        }, 2000); // Change box every 2 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="boxes">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`box box${index} ${index === currentBox ? "active" : ""}`}
                    />
                ))}
            </div>
            <h1 className="staybg web">web</h1>
            <h1 className="staybg one">projects</h1>
        </div>
    );
}

export default Projects;
