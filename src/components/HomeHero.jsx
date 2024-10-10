import React from "react";
import "../styles/HomeHero.css";
import video from "../videos/intro-vid.mp4";

function HomeHero() {
    return (
        <div>
            <video autoPlay muted id="bg-video">
                <source src={video} type="video/mp4" />
                not supported
            </video>
            <section className="home-hero">
            </section>
        </div>
    );
}

export default HomeHero;
