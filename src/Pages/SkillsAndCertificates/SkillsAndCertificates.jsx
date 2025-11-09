import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiGit } from "react-icons/si";
import './SkillsAndCertificates.css';
import { useState } from "react";
import SoftSkills from '../../assets/CRTF/SoftSkills.jpg'
import IT from '../../assets/CRTF/IT.jpg'
import Teaching from '../../assets/CRTF/teaching.jpg'
import Meta from '../../assets/CRTF/Coursera.jpg'
export default function SkillsAndCertificates() {
   const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    
  };



  return (
   <section style={{ paddingTop: "160px" }} >
  <div className="container">
    <h2  style={{ marginBottom: "70px", marginTop : "35px" , color : ' rgb(161 , 161 , 170)' }} className="text-center fw-bold  ">
      Skills <span >&</span> <span style={{color : ' #B8860B' }}>Certificates</span> 
    </h2>

    <div className="row g-5 align-items-start">
      
      <div className="col-md-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false , amount : 0.7 }}
          variants={fadeUp}
          custom={0}
        >
          <h3 className="fw-semibold mb-4 "  style={{color : '  rgb(161 , 161 , 170)' }}>Technical Skills</h3>
          <div className="row text-center g-4">
            <div className="col-4 col-sm-3">
              <FaHtml5 className="text-danger fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>HTML</p>
            </div>
            <div className="col-4 col-sm-3">
              <FaCss3Alt className="text-primary fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>CSS</p>
            </div>
            <div className="col-4 col-sm-3">
              <FaJs className="text-warning fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>JavaScript</p>
            </div>
            <div className="col-4 col-sm-3">
              <FaReact className="text-info fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>React</p>
            </div>
            <div className="col-4 col-sm-3">
              <SiFirebase className="text-warning fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>Firebase</p>
            </div>
            <div className="col-4 col-sm-3">
              <SiGit className="text-danger fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>Git</p>
            </div>
            <div className="col-4 col-sm-3">
              <FaDatabase className="text-success fs-1 mb-2" />
              <p style={{ color : '#ffffff' }}>API Integration</p>
            </div>
          </div>

          <h3 className="fw-semibold mt-5 mb-3" style={{ color : ' rgb(161 , 161 , 170)' }}>Soft Skills</h3>
          <ul style={{ color : '#ffffff' }} >
            <li>Problem Solving & Critical Thinking</li>
            <li>Communication & Teamwork</li>
            <li>Time Management</li>
            <li>Continuous Learning</li>
          </ul>

          <h3 className="fw-semibold mt-5 mb-3" style={{ color : ' rgb(161 , 161 , 170)' }} >Languages</h3>
          <ul style={{ color : '#ffffff' }}>
            <li>Arabic __ Native</li>
            <li>English __ Intermediate</li>
          </ul>
        </motion.div>
      </div>

     
      <div className="col-md-6">
        <motion.div
     
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <h3 className="fw-semibold mb-5 " style={{ color : ' rgb(161 , 161 , 170)' }}>
            Certificates & <span style={{ color : '#B8860B' }}>Achievements</span> 
          </h3>

          <div  className="accordion" id="certificatesAccordion">
            
            <motion.div  variants={fadeUp} custom={1.1} className="accordion-item ">
              <h2 className="accordion-header">
                <button
                
                  className={`accordion-button ${openIndex === 0 ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(0)}
                >
                  Soft Skills Certificate – [Training Authority]
                </button>
              </h2>
              <motion.div
                className={`accordion-collapse collapse ${openIndex === 0 ? "show" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === 0 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="accordion-body ">
                  Completed a certified soft skills program covering communication,
                  teamwork, and professional growth.
                  <div className="text-center mt-3">
                    <img
                      src={SoftSkills}
                      alt="Soft Skills Certificate"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "450px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div variants={fadeUp} custom={1.3} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === 1 ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                >
                  Meta Diploma in Metaverse & Virtual Reality Applications
                </button>
              </h2>
              <motion.div
                className={`accordion-collapse collapse ${openIndex === 1 ? "show" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === 1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="accordion-body ">
                  Earned after completing Meta’s Metaverse course, exploring virtual
                  reality technologies, immersive environments, and user interaction
                  design — sparked by my deep interest in virtual worlds.
                  <div className="text-center mt-3">
                    <img
                      src={Meta}
                      alt="Meta Diploma Certificate"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "450px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div variants={fadeUp} custom={1.4} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === 2 ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(2)}
                >
                  IT & Computer Skills Certificate – Ministry of Communications
                </button>
              </h2>
              <motion.div
                className={`accordion-collapse collapse ${openIndex === 2 ? "show" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === 2 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="accordion-body ">
                  Certified in computer fundamentals, Windows 10, internet usage,
                  and desktop software applications by Egypt’s Ministry of Communications.
                  <div className="text-center mt-3">
                    <img
                      src={IT}
                      alt="MCIT Certificate"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "450px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div variants={fadeUp} custom={1.5} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === 3 ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(3)}
                >
                  Teaching Practice Certificate – Ministry of Education
                </button>
              </h2>
              <motion.div
                className={`accordion-collapse collapse ${openIndex === 3 ? "show" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === 3 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="accordion-body ">
                  Certified after practical training as a computer science teacher,
                  enhancing communication and mentoring abilities.
                  <div className="text-center mt-3">
                    <img
                      src={Teaching}
                      alt="Teaching Practice Certificate"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "450px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div variants={fadeUp} custom={1.7} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === 4 ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(4)}
                >
                  Bravo Company Programming Diploma – Full Stack Development (Ongoing)
                </button>
              </h2>
              <motion.div
                className={`accordion-collapse collapse ${openIndex === 4 ? "show" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === 4 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="accordion-body ">
                  Hands-on diploma focusing on front-end and back-end development.
                  Currently studying backend technologies using Laravel framework.
                  
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
}
