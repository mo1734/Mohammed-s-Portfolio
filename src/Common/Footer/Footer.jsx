import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";

function Footer() {
  const goldenHover = '#B8860B';
    const backgroundDark = '#121212';
  return (
    <footer className="custom-footer mt-5 pt-4 pb-3" style={{ backgroundColor: backgroundDark, color: 'rgb(161, 161, 170)' }}>
        <div className="container">
            <div className="row justify-content-center text-center">
                
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <h5 className="footer-title fw-bold mb-3" style={{ color: goldenHover }}>Connect with Me</h5>
                    <div className="d-flex justify-content-center gap-4">
                        
                        <a href="https://www.linkedin.com/in/mohammed-ali-811951325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUDpUWE0LSbG8hz%2B8%2FNeLbA%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-icon-link" style={{ color: 'rgb(161, 161, 170)' }}>
                            
                            <RxLinkedinLogo className='footer-icon' />
                            
                        </a>
                        
                        <a href="https://github.com/mo1734" target="_blank" rel="noopener noreferrer" className="footer-icon-link" style={{ color: 'rgb(161, 161, 170)' }}>
                            <BsGithub className='footer-icon' />
                            
                        </a>

                        
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedali17203@gmail.com" className="footer-icon-link" style={{ color: 'rgb(161, 161, 170)' }}>
                           <MdEmail className='footer-icon' />
                            
                        </a>
                    </div>
                </div>
                
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                    <p className="mb-0 text-white-50 footer-text">
                        &copy; {new Date().getFullYear()} Mohamed's Portfolio. All Rights Reserved.
                    </p>
                </div>

                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <span className="text-white-50 fw-light footer-text">
                        Designed & Developed by <span style={{ color: goldenHover }}>Mohamed</span>.
                    </span>
                </div>

            </div>
        </div>
    </footer>
  );
}

export default Footer;