import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import "./info.scss";

const textVariants = {
  initial: {
      x: 800,
      opacity: 0
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
      }
  },
};

const titleVariants = {
  initial: {
      x: -500,
      opacity: 0
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
      }
  },
};

export default function Info() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="containerInfo">
      <motion.div 
        className="title"
        variants={titleVariants} 
        initial="initial"
        animate={mainControls}
      >
        <h1><span className="about">About</span>me <span>:</span></h1>
      </motion.div>
      <motion.div className="info"
        variants={textVariants} 
        initial="initial"
        animate={mainControls}
      >
        <p>
        Hi there! I'm Akhil Verma, a passionate front-end developer dedicated to crafting user-centric digital experiences. With expertise in HTML, CSS, JavaScript, and React, I specialize in building responsive websites and dynamic web applications.
        </p>
        <p>
        In my portfolio, you'll find a showcase of projects where I blend design and code to create intuitive interfaces and engaging interactions. I thrive in collaborative environments and love turning ideas into reality.
        </p>
        <p>
        Outside of coding, I enjoy exploring the intersection of technology and art, discovering new art styles, and creating new art <a target="_blank" href="https://www.instagram.com/weebly._art/">works</a>. 
        </p>
        <p>
        I'm also passionate about open-source projects, Let's connect and create something amazing together!
        </p>
      </motion.div>
    </div>
  )
}
