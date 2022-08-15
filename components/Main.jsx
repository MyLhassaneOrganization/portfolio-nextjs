import React from 'react';
import Image from 'next/image';
import iam from '../public/assets/iam.jpg';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    // Parrent Contatainer
    <div id='home' className='w-full h-screen text-center'>
      {/* Main Container */}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='bg-red'>
            <Image className="rounded-full" src={iam} alt="My Picture" width="100" height="100" />
          </div>
          <p className='uppercase text-sm tracking-widest text-gray-600 mt-4'>LET&apos;S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi, Im hassan <span className='text-[#5651e5]'>Alaoui</span></h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p>I&apos;m a fron-end web developer spicializing in building (and occasionally designing) exceptionally digital experiences.</p>
          <p>Currently, I&apos;m focused on building responsive front-end web applications while learning back-end technologies.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main