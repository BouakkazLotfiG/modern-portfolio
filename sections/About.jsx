'use client';

import Spotify from 'react-spotify-embed';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
    >
      <TypingText title='| About Me' textStyles='text-center ' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Hello i'm
        <span className='font-extrabold text-white'> Lotfi Bouakkaz </span>I am
        a 24yo junior frontend web developer a 24yo junior frontend web
        developer a 24yo junior frontend web developer a 24yo junior frontend
        web developer a 24yo junior fntend web developer a 24yo junior frontend
        web developer a 24yo junior frontend web developer a 24yo junior
        frontend web developer frontend web developer a 24yo junior frontend web
        developer a 24yo junior frontend web developer
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow'
        className='w-[30px] h-[30px] object-contain mt-[28px]'
      />
      <motion.div className='mt-20' variants={fadeIn('up', 'tween', 0.2, 1)}>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className=' mt-[8px] mb-[8px] font-bold sm:text-[25px] text-[20px] text-center text-secondary-white'
        >
          Latest Release
        </motion.p>
        <iframe
          src='https://open.spotify.com/embed/track/6LebOVdh9x0tsWnODTfDRV?utm_source=generator'
          width='300'
          height='200'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          title='skyles'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
