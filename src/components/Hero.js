import React from 'react'
import profile from "../Assets/Tejas_Photo.jpg"
import { GithubIcon,Send,Linkedin } from 'lucide-react';
import {MapPin} from "lucide-react"

const Hero = () => {
  return (
    <div className='h-screen md:mx-auto md:max-w-6xl flex flex-col gap-24 md:gap-12 md:flex-row md:mt-[-75px]'> 
      <div className='flex ml-3 mr-1 mt-12 md:mx-0  max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12'>
        
        <div>
          <h1 className='text-3xl font-semibold md:text-4xl mb-4'>Hi, I&apos;m Tejas{' '}
            <span>👋</span>
          </h1>
          <p className='text-lg md:text-2xl mx-1' > I&apos;m a fresh graduate excited about frontend development. I like to turn designs into interactive websites using React with TailwindCSS.</p>
        </div>

        <p className='flex text-lg'><MapPin/> &nbsp; Maharastra, India</p>
           
        <p className='flex items-center text-lg ml-1'>
          <span className="relative flex h-3 w-3 mr-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
            Available for new projects
        </p>

        <div className='flex ml-2 mt-4'>
          <a className='mx-1'  onClick={() => window.open("https://github.com", '_blank')}><GithubIcon/></a>
          <a className='mx-1' onClick={() => window.open("https://github.com", '_blank')}><Send/></a>
          <a className='mx-1' onClick={() => window.open("https://github.com", '_blank')}><Linkedin/></a>
        </div>
      </div>

      <div className='flex items-center justify-center order-first md:order-last md:flex-grow md:justify-end relative top-20 md:top-0'>
            <img className='z-10 w-[260px] md:w-[280px]  mt-[-46px]  rounded-sm border-r-[6px] border-l-4 md:border-l-0 border-b-4 border-white' src={profile} />
            <div className='z-0  absolute w-[285px] md:w-[280px] mt-[-10px] md:mt-[25px] md:left-[90px] h-[320px] bg-gray-300' color='black'></div>
        </div>

    </div>
  )
}

export default Hero
