import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import moveFactsImg from "../../../public/movieFacts.jpg";
import youTubeImg from "../../../public/youtube.jpg";
import ProVeterinarianImg from "../../../public/Pro-veterinarian.jpg";
import Ecommerce from "../../public/e-commmerce.jpg";

import "./portfolio.scss";

import Single from "./single/Single";

const items = [
    {
        id: 1,
        title:"MovieFacts",
        img: moveFactsImg,
        desc: "This web applictaion is a treasure trove of cinematic delights, offering comprehensive details about your favorite films. Discover insightful ratings, captivating trailers, and in-depth casting information for each movie in our collection.",
        codeLink: "https://github.com/akhilworks2001/MovieFacts",
        projectLink: "https://movie-facts.vercel.app/",
        techUsed: ["React", "Router-dom", "Axios", "scss", "react-player", "redux"],
        techUsed2: [ "lazy-load-image", "infinite-scroll"],
    },
    {
        id: 2,
        title:"Youtube Clone",
        img: youTubeImg,
        desc: "This web application mimics the core features of YouTube, including video playback, search functionality, likes, subscibers and views. ",
        codeLink: "https://github.com/akhilworks2001/Youtube",
        projectLink: "https://youtube-kappa-mocha.vercel.app",
        techUsed: [ "React", "Router-dom", "Axios", "tailwind", "react-player"],
    },
    {
        id: 3,
        title:"Pro Veterinarian",
        img: ProVeterinarianImg,
        desc: "This web application serves as a demonstration of front-end styling techniques using HTML and Bootstrap framework. It offers a curated collection of styled components, layouts, and responsive design patterns.",
        codeLink: "https://github.com/akhilworks2001/Pro-Veterinarian",
        projectLink: "https://akhilworks2001.github.io/Pro-Veterinarian",
        techUsed: ["html", "bootstrap"],
    },
    {
        id: 4,
        title: "E-commerce",
        img: Ecommerce,
        desc: "this web hosts a scalable and secure e-commerce platform with a comprehensive set of features for both customers and administrators. Users can enjoy seamless product browsing, a streamlined checkout process. Admins can efficiently manage products, orders, and user accounts, with access to detailed analytics.",
        projectLink: "https://e-commerce-two-nu-93.vercel.app",
        techUsed: ["React", "Router-dom", "firebase", "Redux", "Readux-saga"],
    }
];


export default function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({target: ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
      <div className="portfolio" ref={ref}>
          <div className="progress">
              <h1>Projects</h1>
              <motion.div style={{scaleX}} className="progressBar"></motion.div>
          </div>
          {items.map((item) => (
              <Single item={item} key={item.id} />
          ))}
      </div>
  )
};
