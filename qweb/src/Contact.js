import './Contact.css';
import Header from './Header';

function Contact(){
    return (
        <div className='Contact'>
            <Header />
            <h1>Contact.</h1>
            {/* <div id="container">
                <div className='box' id='contactBoxes'>
                    <h2>where submissions will go</h2>
                </div>
                <div className='box' id='purpleTextBox'>
                    <h2>Stay up to date with us</h2>
                </div>
            </div> */}
            <div className='row' id='row'>
                <div className='purpleTextbox' id='purpleTextbox'>
                    <p>Do this work</p>
                </div>
                <div className="purpleTextbox" id="purpleTextbox">
                    <h2>Stay up to date with us.</h2>
                    <div className='logo_link'>
                        <a href="https://www.instagram.com/artclubqu/?hl=en"><img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png" alt="Instagram logo"></img></a>
                        <p>Keep track of important updates.</p>
                    </div>
                    <div className='logo_link'>
                        <a href="https://www.linkedin.com/company/artclubqu/"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png" alt="LinkedIn logo"></img></a>
                        <p>Connect with our club members.</p>
                    </div>
                    <div className='logo_link'>
                        <img src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-picture-photo-512.png" alt="Photo icon"></img>
                        <p>See our past showcases.</p>
                    </div>
                    

                </div>

            </div>
            
        </div>
    );
        
}

export default Contact;