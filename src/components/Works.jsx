import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { instagram } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  instagram_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(instagram_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={instagram}
                alt='Show-reel'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return(
  <>
    <motion.div
        variants={textVariant()}
    >
      <p className={styles.sectionSubText}>Check out</p>
      <h2 className={styles.sectionHeadText}>Projects Done...</h2>
      <p className={styles.sectionSubText}><em>On <strong>3D</strong> and <strong>front-end web development.</strong></em></p>
      
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        The following projects showcase my skills and experience through real-world examples of my work. Each project has a short description of how I did them and embedded is a link to both code repositories and 3D show-reel of the final renders. It reflects my ability to solve problems, my creative skills, and working collaboratively with different technologies and different teams.
        <br />
        <br />
        <em className='text-[12px]'>Press the instagram icon to find the links to the 3D show-reel and the github icon to find coding projects on github respectively.</em>
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
  </>
)}



export default SectionWrapper(Works, "works");