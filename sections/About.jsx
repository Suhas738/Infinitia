'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 "/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About void" textStyles="text-center" />
      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
      <span className="font-extrabold text-white">Outer space</span> is the expanse beyond celestial bodies and their atmospheres.Outer space is not
       <span className="font-extrabold text-white"> completely empty; </span>  it is a near-perfect vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium as well as
      <span className="font-extrabold text-white"> electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays.</span> Outer space does not begin at a definite altitude above Earth's surface. Certain portions of the upper stratosphere and the mesosphere are sometimes referred to as
      <span className="font-extrabold text-white"> "near space".</span> 
      </motion.p>
      <motion.img
      variants={fadeIn('down','tweem',0.3,1)}
      src="/arrow-down.svg"
      alt="arrow down"
      className="w-[148px] h-[28px] object-contain mt-[28px]">

      </motion.img>
    </motion.div>
    
  </section>
);

export default About;
