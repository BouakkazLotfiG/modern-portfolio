'use client';

import Spotify from 'react-spotify-embed';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id='About' className={`${styles.paddings} relative z-10 `}>
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
        <span className='font-extrabold text-white'> Lotfi Bouakkaz </span>
        ,I’m 24 years old, I graduated from University (USTHB) with a bachelor's
        in Computer Science and a master's degree in Visual Computing. I chose
        Web development because I’ve always been interested in bringing
        beautiful UI designs to life, in a well coded and responsive way.
        <br />
        I'm also an experienced music producer and sound designer under the name
        <span className='font-extrabold text-white'> Skyles </span>, it's one of
        my favorite hobbies, you can listen to my latest release down below.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow'
        className='w-[30px] h-[30px] object-contain mt-[28px]'
      />
      <motion.div className='mt-8' variants={fadeIn('up', 'tween', 0.2, 1)}>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className=' mt-[8px] mb-[8px] font-bold sm:text-[25px] text-[20px] text-center text-secondary-white'
        >
          Latest Release
        </motion.p>
        <iframe
          className='rounded-lg w-[250px] md:w-[700px]'
          src='https://open.spotify.com/embed/artist/6bv7KnC1UWk86sXFNS1MpB?utm_source=generator'
          width='50%'
          height='380'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
