import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className={`relative w-full  mx-auto ${
        width > 500 ? "h-screen" : "h-[380px]"
      }`}
    >
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, i'm <span className="text-[#915eff]">Hasan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {" "}
            I develop 3D visuals , user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas width={width} />
      <div className="absolute bottom-[-25px] w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
