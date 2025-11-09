/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import HeaderImage from '../../assets/Images/cropped_circle_imageThree.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
function Header() {
    return (
        
        <section id="home" className="custom-header-section parentOfAll d-flex align-items-center justify-content-center pt-5">
            
            <div className="container mt-5"> 
                
                <div className="row d-flex align-items-center justify-content-around">
                    
                    <div className="col-12 col-md-4 order-1 order-md-2 d-flex flex-column align-items-center mb-5 mb-md-0">
                        
                        <motion.div
                        
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                        className="custom-image-cont mb-3 rounded-circle d-flex align-items-center justify-content-center">
                            <img 
                                src={HeaderImage} 
                                className='img-fluid rounded-circle custom-profile-image' 
                                alt="Mohamed Profile" 
                            />
                        </motion.div>

                        <a 
                            href="../../assets/Mohammed Ali Mohammed Hanafy4.docx" 
                            download 
                            className="text-decoration-none custom-link-gold footer-link-size"
                        >
                            Download Resume (CV)
                        </a>
                    </div>
                    
                    <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
                        <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                          className="display-3 fw-bolder lh-sm text-light custom-text-light header-h1-size">
                            Hello, I'm <span className="custom-gold-text">Mohamed</span>
                        </motion.h1>
                        
                        <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                          className="mt-4 fs-4 text-secondary custom-text-muted header-p1-size">
                            A passionate <span className="fw-bold">Frontend Developer</span>, specializing in building modern user interfaces with (React.js).
                        </motion.p>
                        
                        <motion.p 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-2 custom-text-secondary header-p2-size">
                            I transform design concepts into responsive, high-performance, and pixel-perfect web experiences.
                        </motion.p>
                        
                        <div className="mt-5 d-flex gap-3 justify-content-center justify-content-md-start">

                            <a 
                                href="#projects" 
                                className="btn custom-btn-gold custom-btn-size text-white"
                            >
                                My Projects
                            </a>

                            <a 
                                href="#contact" 
                                className="btn custom-btn-gold-outline custom-btn-size text-white"
                            >
                                Get In Touch
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;