import React from 'react'
import comingsoon from '../Assets/comingsoon.jpg'

const ProjectCard = () => {
  return (
    <div className='max-w-6xl mx-4 md:mx-auto flex flex-col md:flex-row gap-10 shadow-xl md:shadow-lg rounded-xl border-2 md:border-0 mb-6'>
        <div className='w-full md:w-1/2 bg-gray-100 px-10 py-20'>
            <img src={comingsoon} className='w-[75% ] mx-auto rounded-lg shadow-2xl hover:scale-105'/>
        </div>
        <div className='w-full md:w-1/2 mx-2 my-4'>
            <h1 className='animate animate-pulse text-left font-semibold text-2xl ml-4 m-4'>Project Title</h1>
            <p className='text-left ml-4 mx-3 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsam, veritatis architecto veniam officiis quaerat dolor eveniet praesentium ratione dolores a harum maiores deserunt non velit impedit reprehenderit at in?</p>
            <div className='flex flex-wrap mx-4'>
                <button className='bg-gray-100 m-2 px-4 py-2 rounded-lg'>Html</button>
                <button className='bg-gray-100 m-2 px-4 py-2 rounded-lg'>CSS</button>
                <button className='bg-gray-100 m-2 px-2 py-2 rounded-lg'>JS</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
