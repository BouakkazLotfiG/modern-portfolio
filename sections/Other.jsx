'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { other } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Other = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-10`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.95] flex justify-center flex-col'
      >
        <TypingText title='| What are my other used technologies?' />
        <TitleText title={<>My other commonly used tools</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {other.map((feature) => (
            <StartSteps
              key={feature}
              icon={feature.imgUrl}
              text={feature.title}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/other.svg'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Other;
