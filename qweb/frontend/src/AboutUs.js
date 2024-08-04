
import Header from './Header';
import Footer from './Footer';
import AboutUsComp from './AboutUsComp';
import './main.css';
import './AboutUs.css'
import axios from 'axios';

import { createTheme, styled, ThemeProvider} from "@mui/material/styles";
import { useEffect, useState } from 'react';


function AboutUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // //Replace with your API endpoint
    // axios.get('/api/your-endpoint')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);

    //   });
    }, []);

  return (
    <div className="AboutUs">
      <Header/>
      <h1> About Us. </h1>
      
      <div class="about-us-container">
          <p>Meet our wonderful team!</p>
          
      </div>
      <div className="members">
        {/* {data.map((item, index) => (
          <AboutUsComp key={index} photo={item.photo} name={item.name} description={item.description} />
        ))} */}
        <AboutUsComp name="Hi" description="hello"/>
        <AboutUsComp name="Hi" description="hello"/>
        <AboutUsComp name="Hi" description="hello"/>

      </div>
      
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default AboutUs;
