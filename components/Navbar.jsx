'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className={`${styles.xPaddings} py-8 relative `}
      >
        <div className='absolute w-[50%] inset-0 gradient-01' />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
            BOUAKKAZ
          </h2>

          <img src='/menu.svg' alt='menu2' onClick={() => setToggle(true)} />
        </div>
      </motion.nav>
      <div className='app__navbar-menu '>
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <img
              src='/arrow.svg'
              alt='menu'
              onClick={() => {
                setToggle(false);
                console.log(toggle);
              }}
            />
            <ul>
              {['home', 'about', 'portfolio', 'skills', 'contact'].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <div className='mb-[50px] h-[2px] bg-white opacity-10 z-40' />
            <a href='mailto:bouakkaz144.lotfi@gmail.com'>
              <button
                type='button'
                className='flex items-center h-fit py-3 px-4 bg-[#25618B] rounded-[32px] gap-[12px]'
              >
                <img
                  src='/code.png'
                  alt='headset'
                  className='w-[24px] h-[24px] object-contain'
                />
                <span className='font-normal text-[16px] text-white'>
                  Contact
                </span>
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
