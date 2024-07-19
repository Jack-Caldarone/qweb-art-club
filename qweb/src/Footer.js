import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer>
            <div class='container'>
                <div class="art-club-parent">
                    <p>Art</p>
                    <p>Club.</p>
                    <div class="copyright">© 2023 — 2024</div>
                </div>
            </div>
            <div class="club-text">
                <p>
                    <b>Materials, a Space, Create.</b>
                </p>
                <p>Have any questions?</p>
                <p>Get in contact with us.</p>
            </div>
            <div class="vertical-line"></div>
            <a href = "https://www.instagram.com/artclubqu">Instagram.</a>
            <a href = "https://www.linkedin.com/company/artclubqu">LinkedIn.</a>
            <p>Admin.</p>
        </footer>
    );
}

export default Footer;