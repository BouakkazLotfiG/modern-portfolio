'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[25px] text-white'>
          Feel free to contact me
        </h4>
        <a href='mailto:bouakkaz144.lotfi@gmail.com'>
          <button
            type='button'
            className='flex items-center h-fit md:py-4 py-2 md:px-6 px-3 bg-[#25618B] rounded-[32px] gap-[12px]'
          >
            <img
              src='/code.png'
              alt='headset'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              Contact Me
            </span>
          </button>
        </a>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Made by Lotfi.
          </p>

          <div className='flex gap-4'>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  key={social.name}
                  src={social.icon}
                  alt={social.name}
                  className='w-[28px] h-[28px] object-contain cursor-pointer hover:scale-120 '
                />
              </a>
            ))}
          </div>
          <img src='/logo.png' className='  md:h-[50px] h-[30px]' alt='' />
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
