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
                <motion.h2 variants={textVariants}>Akhil Verma</motion.h2>
                <motion.h1 variants={textVariants}>Front-end Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See The Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
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
