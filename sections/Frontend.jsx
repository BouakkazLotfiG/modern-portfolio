'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { front } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Frontend = () => (
  <section id='Skills' className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.95] flex justify-center flex-col'
      >
        <TypingText title='| What are the technologies i use?' />
        <TitleText title={<>My main frontend stack</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {front.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/frontend.svg'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Frontend;
