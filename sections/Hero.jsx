"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6 sm:pr-16 pr-6 sm:flex-row   hero`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className="flex justify-start  flex-col relative z-10">
        <motion.h1 className={styles.heroHeading} variants={textVariant(1.1)}>
          Frontend
        </motion.h1>
        <motion.div
          className="flex flex-row justify-start items-center"
          variants={textVariant(1.2)}
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>evloper</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
