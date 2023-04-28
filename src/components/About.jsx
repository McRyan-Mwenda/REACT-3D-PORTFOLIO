import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt='title' className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I'm a 3D animator proficient in modeling, surfacing, lighting, and animation of 3D scenes. My software of choice is Blender 3D. Its advantageous in working on stories using a pipeline way of working. I am a person who thrives off a challenge. I'm a social butterfly who loves people and building meaningful connections. I'm a leader, a doer and a life-long learner.

        <br />
        <br />

        I am also a font-end web developer, creating web-based sites and applications using react-JS, JS, HTML and CSS. I also do a bit of backend development, using python and python-Django framework.

        I'm strategic and tactical, a visionary who loves the details, creative, yet practical. I care about tangible results and exceptional work.

        People often describe me as: authentic, driven and passionate. Which pretty much means that I really care.
      </motion.p>

      <div className='mt-20 flex flx-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")