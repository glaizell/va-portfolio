import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

function Main() {
  return (
    <div
      id='home'
      className='max-w-[1240px] w-full h-screen mx-auto p-4 flex justify-center items-center text-center pt-[120px]'
    >
      <div>
        <p className='uppercase text-sm tracking-widest text-white-600 mb-12'>
          Achieve more with my assistance
        </p>
        <h1 className='py-4 text-white-700 '>
          Hi, I&#39;m <span className='text-[#FFD000]'> Glaizell</span>
        </h1>
        <h1 className='py-2 text-white-700 mb-6'>
          A General Virtual Assistant
        </h1>
        <p className='py-4 text-white-600 sm:max-w-[70%] m-auto mb-12 md:mb-8'>
          Empowering Efficiency, Anytime Anywhere. A virtual assistant with a
          passion for front-end development.
        </p>
        <div className='flex items-center justify-between max-w-[330px] m-auto'>
          <Link
            href='https://www.linkedin.com/in/glaizell-a-079497147/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='main-icons'>
              <FaLinkedinIn />
            </div>
          </Link>
          <Link
            href='https://github.com/glaizell'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='main-icons'>
              <FaGithub />
            </div>
          </Link>
          <Link href='#contact'>
            <div className='main-icons'>
              <AiOutlineMail />
            </div>
          </Link>

          <Link
            href='https://t.me/glaizell'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='main-icons'>
              <FaTelegramPlane />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
