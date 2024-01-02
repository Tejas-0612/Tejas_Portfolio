import React from 'react'
import { Mail, Phone,GithubIcon,Send,Linkedin } from 'lucide-react';
import { email,mobile } from '../Containers/data';

const Contact = () => {
  return (
    <div className='h-[480px] flex flex-col justify-center text-center max-w-5xl mx-auto'>
      <button className='bg-gray mx-auto  p-2 text-3xl md:text-4xl font-semibold md:font-bold rounded-3xl'>Get in Touch</button>

      <div className='mt-8 mb-12'>
        <p className=' mx-2 md:text-xl my-4'>What’s next? Feel free to reach out to me if you are looking for a developer, or simply want to connect.</p>

        <div className='flex justify-center items-center'>
          <Mail size={22} />
          <p className='text-lg md:text-xl my-1 font-semibold'>&nbsp; {email} &nbsp;</p> 
        </div>

        <div className='flex justify-center items-center my-2'>
          <Phone size={20}/>
          <p className='font-semibold text-[18px]'>&nbsp; {mobile} &nbsp;</p>
        </div>

        <p className='mt-4 text-gray-600 text-sm md:text-base'>You can also find me on</p>
        <div className='w-2/3 flex justify-center mx-auto my-6'>
          <a className='mx-1 '  onClick={() => window.open("https://github.com", '_blank')}><GithubIcon/></a>
          <a className='mx-1 ' onClick={() => window.open("https://github.com", '_blank')}><Send/></a>
          <a className='mx-1 ' onClick={() => window.open("https://github.com", '_blank')}><Linkedin/></a>
        </div>

      </div>

    </div>
  )
}

export default Contact
    