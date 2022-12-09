'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';
import { socials } from '../constants';

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
          <ul className='app__navbar-links text-secondary-white'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>

          {toggle ? (
            <img
              src='/close.svg'
              alt='close'
              className='icon'
              onClick={() => {
                setToggle(false);
                console.log(toggle);
              }}
            />
          ) : (
            <img
              src='/menu.svg'
              alt='menu2'
              className='close'
              className='icon'
              onClick={() => {
                setToggle(true);
                console.log(toggle);
              }}
            />
          )}
        </div>
      </motion.nav>

      {toggle && (
        <motion.div
          whileInView={{ x: [400, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className='menu backdrop-blur-xl '
        >
          <ul>
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  className='text-secondary-white hover:text-white'
                  href={`#${item}`}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className='menu-bottom'>
            <div className=' h-[2px] bg-white opacity-10 z-40' />
            <a
              href='mailto:bouakkaz144.lotfi@gmail.com'
              className='contact-button'
            >
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
            <div className='socials'>
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
            <p className='font-normal text-[14px] text-white opacity-50'>
              Made by Lotfi.
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
