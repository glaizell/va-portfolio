import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-white-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white-700'>
            Hi, I&#39;m <span className='text-[#FFD000]'> Glaizell</span>
          </h1>
          <h1 className='py-2 text-white-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-white-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/glaizell-a-079497147/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#FFD000] hover:text-black duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/glaizell'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 hover:bg-[#FFD000] hover:text-black ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;