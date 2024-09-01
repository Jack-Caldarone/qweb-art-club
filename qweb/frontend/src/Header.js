import React, { useState } from "react";
import './Header.css';

// function hamburgerMenu(){
//     var x = document.getElementById("headerMenu");
//     if (x.className === "header"){
//         x.className += "responsive";
//     }
//     else {
//         x.className = "header";
//     }
// }

function Header(){
    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => {
            setIsOpen(!isOpen);
        }


    return(
        <header className="header" id="headerMenu">
            <div class="hamburger" onclick={toggle}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <a href="/">Home.</a>
                    <a href="/aboutus">About Us.</a>
                    <a href="/events">Events.</a>
                    <a href="/gallery">Gallery.</a>
                    <a href="/contact">Contact.</a>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;