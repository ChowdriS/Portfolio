import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name,x,y})=>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer  absolute'
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            // animate={{x:x,y:y}}
            // transition={{duration:1.5}}
            whileInView={{x:x,y:y}}
            transition={{duration:2.5,type:"spring"}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-16 w-full text-center mb-1'>Tech Stack</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
            text-light p-8 shadow-dark cursor-pointer' whileHover={{scale:1.05}}
            >
                Skills
            </motion.div>
            <Skill name={"C++"} x="-5vw" y="-9vw"/>
            <Skill name={"HTML"} x="-20vw" y="2vw"/>
            <Skill name={"Javascript"} x="20vw" y="6vw"/>
            <Skill name={"NextJS"} x="0vw" y="9vw"/>
            <Skill name={"Figma"} x="-20vw" y="-15vw"/>
            <Skill name={"Firebase"} x="15vw" y="-12vw"/>
            <Skill name={"Tailwind CSS"} x="32vw" y="-5vw"/>
            <Skill name={"ReactJS"} x="0vw" y="-20vw"/>
            <Skill name={"Web Design"} x="-25vw" y="14vw"/>
            <Skill name={"CSS"} x="18vw" y="18vw"/>
            
        </div>
    </>
  )
}

export default Skills