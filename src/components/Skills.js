import React from 'react'
import { Technologies } from '../Containers/data'
import SkillsCard from './SkillsCard'
const Skills = () => {
  return (
    <div className='h-auto text-center md:my-10 md:pb-20'>
        <button className='bg-gray p-2 text-3xl md:text-4xl rounded-3xl font-semibold md:font-bold'> Skills</button>
        <div className='max-w-6xl mx-auto flex flex-wrap justify-center'>
          {Technologies.map((technology,index)=><SkillsCard {...technology} key={index}/>)}
        </div>
    </div>
  )
}

export default Skills
