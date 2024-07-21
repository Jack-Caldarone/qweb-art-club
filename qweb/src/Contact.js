import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import { createTheme, styled, ThemeProvider} from "@mui/material/styles";
import TextField from '@mui/material/TextField';

// MAKE PAGE RESPONSIVE


function Contact(){
    return (
        <div className='Contact'>
            <Header />
            <h1>Contact.</h1>
            
            <div className='row' id='row'>
                <div className='inputFields' id='purpleTextbox'>
                    <TextField 
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        sx = {{
                            "& .MuiOutlinedInput-root" : {
                                background: "#EDECF0",
                                color: "#1a1a1a",
                                fontFamily: "Helvetica",
                                width: "350px",
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#A496BC",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined" : {
                                color: "#766B94",
                                fontWeight: "bold",
                            },
                            "& .Mui-focused" : {
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#766B94",
                                    borderWidth: "2px",
                                },
                            },
                            
                        }}
                    />
                                        <TextField 
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        sx = {{
                            "& .MuiOutlinedInput-root" : {
                                background: "#EDECF0",
                                color: "#1a1a1a",
                                fontFamily: "Helvetica",
                                width: "350px",
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#A496BC",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined" : {
                                color: "#766B94",
                                fontWeight: "bold",
                            },
                            "& .Mui-focused" : {
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#766B94",
                                    borderWidth: "2px",
                                },
                            },
                            
                        }}
                    />
                                        <TextField 
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows = {5}
                        fullWidth
                        sx = {{
                            "& .MuiInputBase-root" : {
                                alignItems: "flex-start",
                            },
                            "& .MuiInputBase-input" : {
                                textAlign: "left",
                                wordBreak: "break-word",
                            },
                            "& .MuiOutlinedInput-root" : {
                                background: "#EDECF0",
                                color: "#1a1a1a",
                                fontFamily: "Helvetica",
                                width: "350px",
                                height: "200px",
                                
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#A496BC",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined" : {
                                color: "#766B94",
                                fontWeight: "bold",
                            },
                            "& .Mui-focused" : {
                                "& .MuiOutlinedInput-notchedOutline" : {
                                    borderColor: "#766B94",
                                    borderWidth: "2px",
                                },
                            },
                            
                        }}
                    />
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
                        <a href="/gallery"><img src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-picture-photo-512.png" alt="Photo icon"></img></a>
                        <p>See our past showcases.</p>
                    </div>
                    

                </div>

            </div>
            <Footer />
            
        </div>
    );
        
}

export default Contact;