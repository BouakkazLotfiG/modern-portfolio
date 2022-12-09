'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { socials } from '../constants';

const Hero = () => (
  <section
    id='Home'
    className={`${styles.yPaddings} sm:pl-16 pl-6 sm:pr-16 pr-6 sm:flex-row   hero`}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className='flex justify-start  items-center flex-col relative z-10'>
        <motion.h2
          variants={textVariant(0.8)}
          className=' mt-[8px] font-normal sm:text-[32px] text-[20px]  text-secondary-white'
        >
          Hello,
        </motion.h2>
        <motion.h2
          variants={textVariant(0.9)}
          className='pb-20 mt-[8px] font-normal sm:text-[32px] text-[20px]  text-secondary-white'
        >
          My name is
          <span className='font-extrabold text-white'> Lotfi Bouakkaz, </span>
          i'm a
        </motion.h2>
        <motion.h1 className={styles.heroHeading} variants={textVariant(1.1)}>
          Frontend
        </motion.h1>
        <motion.div
          className='flex flex-row justify-start items-center'
          variants={textVariant(1.2)}
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>evloper</h1>
        </motion.div>

        <motion.div
          className='flex flex-row justify-start items-center pt-20'
          variants={textVariant(1.2)}
        >
          <div className='flex gap-4'>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  key={social.name}
                  src={social.icon}
                  alt={social.name}
                  className='w-[28px] h-[28px] object-contain cursor-pointer'
                />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className='flex flex-row justify-start items-center pt-20'
          variants={textVariant(1.2)}
        >
          <div className='scrolldown'>
            <svg height='30' width='10'>
              <circle className='scrolldown-p1' cx='5' cy='15' r='2' />
              <circle className='scrolldown-p2' cx='5' cy='15' r='2' />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
