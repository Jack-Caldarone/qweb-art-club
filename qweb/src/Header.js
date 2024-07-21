import React from "react";
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
    return(
        <header className="header" id="headerMenu">
            
            <nav>
                <a href="/">Home.</a>
                <a href="/AboutUs">About Us.</a>
                <a href="/events">Events.</a>
                <a href="/gallery">Gallery.</a>
                <a href="/contact">Contact.</a>
            </nav>
            <div class="hamburger" onclick="hamburgerMenu()">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </header>
    );
}

export default Header;