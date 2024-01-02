import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='h-auto text-center my-6'>
      <button className='bg-gray p-2 text-3xl md:text-4xl rounded-3xl mb-10 font-semibold md:font-bold'> Projects</button>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  )
}

export default Projects
