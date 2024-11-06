import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../images/gold-81.png";
import { Link } from "react-router-dom";

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Track scroll position to determine when the section reaches the top
        const header = document.getElementById("sticky-header");
        const headerTop = header.getBoundingClientRect().top;
        setIsSticky(headerTop <= 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isSticky ? "sticky" : ""} id="sticky-header">
            <Link to={'/'} className="logo">
                <img src={logo} alt="logo" id="logo"/>
            </Link>
            <nav>
                <a href="/" className="h-links">Home</a>
                <a href="/service" className="h-links">Services</a>
                <a href="#about" className="h-links">About</a>
                <a href="#projects" className="h-links">Work</a>
                <a href="/school" className="h-links">Learn</a>
                <button><a href="#contact">Contact Us</a></button>
            </nav>
        </header>
    );
}

export default Header;