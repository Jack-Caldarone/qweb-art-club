import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';
import './Gallery.css';

import { createTheme, styled, ThemeProvider} from "@mui/material/styles";


function AboutUs() {
  return (
    <div className="AboutUs">
      <Header/>
      <h1> About Us. </h1>
      <Footer />

      <div class="event-desc-container">
          <p class="event-desc">
            Meet our wonderful team!
          </p>
      </div>

    </div>
  );
}

export default AboutUs;
