'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  desc,
  githubURL,
  liveURL,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]  '
    }  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex  `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt='planet-04'
      className='absolute w-full h-full object-cover rounded-[24px] '
    />
    {active !== id ? (
      <div className='absolute  lg:h-[720px] bottom-0 md:p-10  p-4 flex justify-end w-full flex-col rounded-b-[24px] md:bg-gradient-to-t from-black'>
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white z-0 lg:rotate-[-90deg] lg:origin-[0,0] pl-4'>
          {title}
        </h3>
      </div>
    ) : (
      <div className='absolute md:h-[720px] bottom-0 p-8 flex justify-end w-full flex-col rounded-b-[24px] bg-gradient-to-t from-black	'>
        <div className='flex gap-8'>
          <a href={githubURL} target='_blank' rel='noopener noreferrer'>
            <div
              className={`${styles.flexCenter} w-[60px]  h-[60px] rounded-[24px] glassmorphism mb-[16px] cursor-pointer`}
            >
              <img
                src='/github.png'
                alt='headset'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </a>
          <a href={liveURL} target='_blank' rel='noopener noreferrer'>
            <div
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] cursor-pointer`}
            >
              <img
                src='/see.png'
                alt='headset'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </a>
        </div>
        <p className='font-normal text-[16px] leading-[20.16px] text-secondary-white '>
          {desc}
        </p>
        <h2 className='mt-[10px] font-semibold sm:text-[32px] text-[24px] text-white'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
