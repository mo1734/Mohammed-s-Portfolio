import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Projects.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Food1 from "../../assets/Food/1.png";
import Food2 from "../../assets/Food/Movies & TV 11_5_2025 6_39_51 AM.png";
import Food3 from "../../assets/Food/Movies & TV 11_5_2025 6_40_40 AM.png";
import Food4 from "../../assets/Food/Movies & TV 11_5_2025 6_41_11 AM.png";
import Food5 from "../../assets/Food/Movies & TV 11_5_2025 6_41_40 AM.png";
import Food6 from "../../assets/Food/Movies & TV 11_5_2025 6_41_56 AM.png";
import Food7 from "../../assets/Food/Movies & TV 11_5_2025 6_42_12 AM.png";
import Food8 from "../../assets/Food/Movies & TV 11_5_2025 6_42_18 AM.png";
import Food9 from "../../assets/Food/Movies & TV 11_5_2025 6_42_35 AM.png";
import Food10 from "../../assets/Food/Movies & TV 11_5_2025 6_42_45 AM.png";
import Food11 from "../../assets/Food/Movies & TV 11_5_2025 6_44_30 AM.png";
import Food12 from "../../assets/Food/last.png";

import Watch1 from "../../assets/watshes/1.png";
import Watch2 from "../../assets/watshes/2.png";
import Watch3 from "../../assets/watshes/Media Player 11_5_2025 6_25_46 AM.png";
import Watch4 from "../../assets/watshes/Media Player 11_5_2025 6_26_15 AM.png";
import Watch5 from "../../assets/watshes/Media Player 11_5_2025 6_26_27 AM.png";
import Watch6 from "../../assets/watshes/Media Player 11_5_2025 6_26_44 AM.png";
import Watch7 from "../../assets/watshes/Media Player 11_5_2025 6_27_53 AM.png";
import Watch8 from "../../assets/watshes/Media Player 11_5_2025 6_28_33 AM.png";
import Watch9 from "../../assets/watshes/Media Player 11_5_2025 6_30_30 AM.png";
import Watch10 from "../../assets/watshes/Media Player 11_5_2025 6_30_34 AM.png";
import Watch11 from "../../assets/watshes/Media Player 11_5_2025 6_30_53 AM.png";
import Watch12 from "../../assets/watshes/Media Player 11_5_2025 6_31_03 AM.png";
import Watch13 from "../../assets/watshes/last.png";

const Projects = () => {
  const projects = [
    {
      title: "Smart Watch Store",
      description:
        "A modern React + Tailwind project displaying smart watches..using a fake JSON API for dynamic product data and smooth user interaction.",
      screenshots: [
        Watch1,
        Watch2,
        Watch3,
        Watch4,
        Watch5,
        Watch6,
        Watch7,
        Watch8,
        Watch9,
        Watch10,
        Watch11,
        Watch12,
        Watch13,
      ],
      demoLink:
        "https://drive.google.com/file/d/1qGSNZ8hV-lwcQFADs9TQXfEEhyHSuzZ5/view?usp=sharing",
      codeLink: "https://github.com/mo1734/watch-store",
    },
    {
      title: "Food Store Website",
      description:
        "A stylish HTML, CSS & JavaScript food store website with interactive UI and elegant design elements showcasing front-end fundamentals.",
      screenshots: [
        Food1,
        Food2,
        Food3,
        Food4,
        Food5,
        Food6,
        Food7,
        Food8,
        Food9,
        Food10,
        Food11,
        Food12,
      ],
      demoLink:
        "https://drive.google.com/file/d/16rbrWPOxMo6K8uXxTonk5_-dhACEsp4f/view?usp=sharing",
      codeLink: "https://mo1734.github.io/MuhammedAli/",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        paddingTop: "80px",
        overflowX: "hidden",
       
      }}
    >
      <div className="container">
        <motion.h2
          className=" fisrtTitle text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: "#B8860B", fontSize: "35px" }}
        >
         <span style={{color : "rgb(161, 161, 170)"}}>My</span> Projects
        </motion.h2>

        <div
          style={{
            alignItems: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column-reverse",
            overflow: "hidden",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-10 col-lg-9"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                maxWidth: "1200px",
                marginBottom: "80px",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 0.8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className="border-0 p-3 rounded-4 contText text-center"
                
              >
                <h4
                  className="fw-bold mb-3"
                  style={{ color: " rgba(255, 215, 0, 0.5)"  }}
                >
                  {project.title}
                </h4>
                <p className="text-secondary description small mb-5"
                  style={{
                              whiteSpace: "pre-line",
                              wordBreak: "break-word",
                              textAlign: "center",
                              lineHeight: "1.6",
                              maxWidth: "30%",
                              margin: "0 auto"
                            }}
                 >
                  {project.description}
                </p>

                <div className="swiper-container-fix">
                  <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                   
                  >
                    {project.screenshots.map((img, i) => (
                      <SwiperSlide
                      
                      
                       key={i}>
                        <img
                        
                          src={img}
                          alt="imags"
                          className="swiper-image"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: "none" }}
                    className="custom-btn-gold-outline d-flex align-items-center gap-2 rounded-pill px-3"
                  >
                    <FaExternalLinkAlt /> View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="btn custom-btn-gold-outline d-flex align-items-center gap-2 rounded-pill px-3"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
