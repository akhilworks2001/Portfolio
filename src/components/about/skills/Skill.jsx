import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import "./skill.scss";

const logos = ['html', 'css', 'javaScript', 'typeScript', 'react', 'next', 'bootStrap', 'tailwind', 'sass'];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const textVariants = {
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

export default function skill() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
      mainControls.start("visible");
    }
  }, [isInView]);


  return (
    <div ref={ref} className="container">
      <motion.div className="text" 
        variants={textVariants} 
        initial="initial"
        animate={mainControls}
        >
        <motion.h1 variants={textVariants}>Tech stack</motion.h1> 
      </motion.div>
        <span> &nbsp;| &nbsp;</span>

      <div className="logos">

        <motion.ul 
        variants={container}
        initial="hidden"
        animate={mainControls}
        id="logoContainer"
        >
        {logos.map((logo) => (
          <motion.li
            whileHover={{ scale: 1.2, rotate: 360 }}
            variants={item}
            key={logo}
          >
            <img src={`/${logo}.png`} alt="" />
          </motion.li>
        ))}
        </motion.ul>
      </div>
    </div>
  )
}
