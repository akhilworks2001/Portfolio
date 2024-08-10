import React from 'react';
import { motion } from 'framer-motion';

import "./hero.scss";

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
            staggerChildren: 0.1,

        }
    },
    scrollBtn: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const slideVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
}

const downloadCV = () => {
    // resume
    const link = document.createElement('a');
    link.href = '/Akhil_latest.pdf'; 
    link.download = 'Akhil_latest.pdf';
    link.click();
  };  



export default function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
                className="textContainer" 
                variants={textVariants} 
                initial="initial"
                animate="animate">
                <div className="textBox">
                <motion.h1 variants={textVariants}>Hello! I'm Akhil Verma</motion.h1>
                <motion.h2 variants={textVariants}>Front-end Developer</motion.h2>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button onClick={downloadCV} variants={textVariants}>Download CV</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollBtn" src="/scroll.png" alt="" />
                </div>
               
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
            Front-end developer
        </motion.div>
        <div className="imageContainer">
            <img src="/me.png" alt="" />
        </div>
    </div>
  )
}
