/* eslint-disable no-unused-vars */
import React from 'react';
import './MainContent.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { motion } from "framer-motion"
import Lottie from 'lottie-react';
import ContactLotti from '../../assets/Lotti/Profile.json'
import ContactLottiTwo from '../../assets/Lotti/Contact.json'

import { EffectCards, Autoplay } from 'swiper/modules';
function MainContent() {
    return (
        <motion.div
        viewport={{once:false , amount:0.5}}
         className='container-fluid px-0 pt-5 mt-5'>

            
            <section id="skills" >
                <div className='container' >

                    <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="display-4 fw-bold text-center mb-5 custom-text-light custom-h2-skills-size">
                        <span className='custom-gold-text' >Frontend</span> Technical skills
                    </motion.h2>

                    <div className="row d-flex align-items-center pt-5 justify-content-around">
                        
                        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start mb-5 mb-md-0">
                            <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                              className="display-6 fw-bold lh-sm custom-gold-text mb-3 custom-h2-title-size">
                                Practical Application
                            </motion.h2>
                            
                            <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                            className="fs-5 custom-heading-color custom-p-body-size">
                                "Each card represents a core skill where I have completed numerous tasks and applied them to practical, real-world projects. I believe in hands-on learning and delivering production-ready code."
                            </motion.p>
                            
                        </div>
                        
                        <div className="col-12 col-md-5 order-1 order-md-2 d-flex justify-content-center swiper-container-parent">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                className="mySwiper"
                                style={{marginBottom : '140px'}}
                                autoplay={{
                                    delay: 2000, 
                                    disableOnInteraction: false, 
                                      pauseOnMouseEnter: true
                                }}
                                modules={[EffectCards, Autoplay]}
                            >

                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#FF8C00' }}>
                                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">HTML5</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Markup Language</span>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#007BFF' }}>
                                            <path d="M7 13l5-5 5 5"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">CSS3</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Styling</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#7952B3' }}>
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-3.75l2-1.25-2-1.25v-3.75h4v2h-2v1.5l2 1.25-2 1.25v1.5h2v2h-4z"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">Bootstrap 5</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">CSS Framework</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#FFD700' }}>
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">JavaScript (ES6+)</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Programming</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0769AD' }}>
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M14 8h-4v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h4"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">jQuery</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">JS Library</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#00BCD4' }}>
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">React.js</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Library</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#20C997' }}>
                                            <path d="M7 13l5-5 5 5"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">Tailwind CSS</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Utility Framework</span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card h-100 p-3 border-0 rounded-4 custom-card-hover d-flex align-items-center justify-content-center flex-column">
                                        <svg className="mx-auto mb-3 custom-skill-icon-size" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#6F42C1' }}>
                                            <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                                        </svg>
                                        <span className="fs-5 fw-semibold custom-text-light custom-card-title-size">Git/GitHub</span>
                                        <span style={{opacity : '0.5'}} className="text-sm custom-card-subtitle-size">Version Control</span>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <motion.section
            viewport={{once:false , amount:0.5}}
             id="contact" className="py-5 mt-4 ">
                <div className="container pt-5 mt-5">
                    <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                      className="display-4 fw-bolder text-center mb-4 pb-2 custom-gold-text custom-h2-contact-size">
                        <span className='custom-heading-color'>Let's </span> Connect
                    </motion.h2>
                    <motion.p
                    initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                      className="text-center custom-heading-color opacity-3 pb-5 lead text-muted mb-5 custom-p-contact-size">
                        Have a new project? A quick question? <span className="fw-bold custom-gold-text">I'm ready to help!</span>
                    </motion.p>
                        
                    <div className="row justify-content-between contact-row-spacing">
                        <div className="col-md-8 col-lg-6 contact-form-col">
                            <div className="p-4 rounded-4 Form custom-ring">
                                        
                                <form action="#" method="POST" className="row g-4">

                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label text-sm fw-medium text-secondary custom-heading-color d-flex align-items-center mb-1 custom-label-size">
                                            <i style={{color: '#FFD700' , fontSize : '20px'}} className="bi bi-person-fill me-2 custom-icon-size"></i>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="form-control custom-input-size"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label text-sm fw-medium text-light custom-heading-color d-flex align-items-center mb-1 custom-label-size">
                                            <i style={{color: '#FFD700' , fontSize : '20px'}} className="bi bi-envelope-fill me-2 custom-icon-size"></i>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="Your E-mail"
                                            className="form-control custom-input-size"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="service" className="form-label text-sm fw-medium text-light custom-heading-color d-flex align-items-center mb-1 custom-label-size">
                                            <i style={{color: '#FFD700' , fontSize : '20px'}} className="bi bi-code-slash me-2 custom-icon-size"></i>
                                            What kind of project/inquiry?
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            className="form-select custom-input-size"
                                        >
                                            <option value="">Select Service Type</option>
                                            <option value="react_development">React.js Development</option>
                                            <option value="ui_ux_implementation">UI/UX Implementation (HTML/CSS)</option>
                                            <option value="performance_optimization">Frontend Performance Optimization</option>
                                            
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label text-sm fw-medium text-light custom-heading-color d-flex align-items-center mb-1 custom-label-size">
                                            <i style={{color: '#FFD700' , fontSize : '20px'}} className="bi bi-chat-dots-fill me-2 custom-icon-size"></i>
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            required
                                            placeholder="Describe your project details or question..."
                                            className="form-control custom-input-size"
                                        ></textarea>
                                    </div>

                                    <div style={{justifyContent:'space-between' , alignItems : 'center'}} className="d-flex custom-submit-row">
                                        <button
                                            type="submit"
                                            style={{transition : '0.5s' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}
                                            className="btn custom-btn-gold-outline duration btn-lg w-70 fw-bold shadow-sm custom-submit-btn"
                                        >
                                            Send Message & Start Working 
                                            <i style={{textAlign : 'center', fontSize : '19px'}} className="bi bi-arrow-right-circle-fill ms-2 custom-icon-btn"></i>
                                        </button>

                                        <div className='Lottie-Contact-Container'>
                                            <Lottie
                                                animationData={ContactLotti}
                                                loop={true}
                                                autoPlay={true}
                                            />
                                        </div>
                                    </div>

                                    <p className="text-center pt-2 text-sm custom-heading-color opacity-100 custom-p-contact-footer">
                                        I'll get back to you as soon as possible!
                                    </p>
                                </form>
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-6 d-none d-lg-flex align-items-center justify-content-end'> 
                            <div className='Lottie-Contact-Two-Container'>
                                <Lottie 
                                animationData={ContactLottiTwo}
                                loop={true}
                                autoPlay={true}
                                />
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </motion.section>
        </motion.div>
    );
}

export default MainContent;