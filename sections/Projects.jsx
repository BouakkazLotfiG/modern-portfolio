'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Projects = () => {
  const [active, setActive] = useState('spotify');

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| My Portfolio' textStyles='text-center' />
        <TitleText
          title={
            <>
              Take a look at my latest work <br className='md:block hidden' />
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {projects.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
