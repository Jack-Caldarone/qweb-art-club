import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer>
            <div class="text">
                <div class='container'>
                    <div class="art-club-parent">
                        <p><b>Art</b></p>
                        <p><b>Club.</b></p>
                        {/* <div class="copyright">© 2023 — 2024</div> */}
                    </div>
                </div>
                <div class="club-text">
                    <p>
                        <b>Materials, a Space, Create.</b>
                    </p>
                    <p>Have any questions?</p>
                    <p>Get in contact with us.</p>
                </div>

            </div>
            <div class="vertical-line"></div>
            <div class="horizontal-line"></div>
            <div class="links">
                <a href = "https://www.instagram.com/artclubqu">Instagram.</a>
                <a href = "https://www.linkedin.com/company/artclubqu">LinkedIn.</a>
            </div>
            
        </footer>
    );
}

export default Footer;