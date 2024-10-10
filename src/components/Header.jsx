import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../images/gold-81.png";

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
            <img src={logo} alt="logo" id="logo"/>
            <nav>
                <div>Home</div>
                <div>Services</div>
                <div>About</div>
                <div>Work</div>
                <div>Contact</div>
                <div>Learn</div>
                <button>Call To Action</button>
            </nav>
        </header>
    );
}

export default Header;