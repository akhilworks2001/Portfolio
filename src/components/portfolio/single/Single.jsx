import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const Single = ({item}) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-270, 270]);

    return (
        <section>
        <div className="container"> 
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="techUsedContainer"> 
                    {item?.techUsed?.map(item => <div className="tag" key={item}>{item}</div>)}
                </div>
                <div className="techUsedContainer"> 
                    {item?.techUsed2?.map(item => <div className="tag" key={item}>{item}</div>)}
                </div>
                <div className="btnContainer">
                <button><a href={item?.codeLink}> <i style={{fontSize: "17px"}} className="fa">&#xf09b;</i> code</a></button>
                <button><a href={item?.projectLink} target="_blank">demo</a></button>
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    )
}

export default Single;