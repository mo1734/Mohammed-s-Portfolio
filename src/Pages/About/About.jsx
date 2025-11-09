import React from 'react'
import './About.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="container py-5 mt-5">
      <motion.div
        className="card border-0 rounded-4 p-4 about"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 style={{ color: '#ccc' }} className="text-center mb-4 fw-bold">
          About <span style={{ color: '#B8860B' }}>Me</span>
        </h2>

        <p className="fs-5 text-light mb-3">
          I’m <span style={{ color: '#B8860B' }} className="fw-semibold">Mohamed</span>, a passionate 
          and creative <span style={{ color: '#B8860B' }} className="fw-semibold">Front-End Developer</span> 
          who enjoys transforming ideas into engaging and functional web experiences. 
          My journey started nearly a year ago, and I’ve been studying in a professional 
          diploma with <span className="fw-semibold">Bravo Company</span> for about 10 months, 
          learning directly from industry engineers through real world tasks and projects.
        </p>

        <p className="fs-5 text-light mb-3">
          My instructor once described me as 
          <span className="fst-italic"> “hardworking and always improving myself.” </span> 
          You can even reach out to him for more details if you'd like.
        </p>

        <p className="fs-5 text-light mb-3">
          What I love most about Front-End development is the combination of design and logic. 
          The <span style={{ color: '#B8860B' }} className="fw-semibold">UI</span> side fuels my passion for aesthetics 
          and clean layouts, while the <span style={{ color: '#B8860B' }} className='fw-semibold'>logical</span> part of Front-End like managing state, 
          interactivity, and dynamic user flows keeps me challenged and constantly learning.
        </p>

        <p className="fs-5 text-light mb-3">
          Currently, I’m expanding my skills by learning 
          <span style={{ color: '#B8860B' }} className="fw-semibold"> Back-End development</span> with 
          the <span className="fw-semibold">Laravel framework</span> under the guidance 
          of Bravo’s engineers, aiming to strengthen my understanding of full-stack development.
        </p>

        
        <p className="fs-5 text-light mb-3">
          I hold a <span style={{ color: '#B8860B' }} className="fw-semibold">Bachelor’s Degree</span> 
          in <span className="fw-semibold">Educational Technology</span> from 
          <span style={{ color: '#B8860B' }}> Al-Azhar University</span>, 
          Faculty of Education, class of <span style={{ color: '#B8860B' }}>2024</span>. 
          I graduated with a <span className="fw-semibold">Very Good</span> grade and an equivalent 
          <span style={{ color: '#B8860B' }}> GPA ≈ 3.0/4.0</span>, 
          which reflects my strong academic foundation and commitment to learning. 
          Throughout my university journey, I continuously improved — finishing my final year 
          with an <span className="fw-semibold">Excellent</span> grade that represents my growth and perseverance.
        </p>

        <p className="fs-5 text-light">
          Outside of coding, I find peace in calm places, late-night walks, 
          or spending time at a quiet café ... moments that help me reflect 
          and recharge my creativity.
        </p>
      </motion.div>
    </section>
  )
}

export default About
