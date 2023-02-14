import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import NavLogo from '../../public/assets/navLogo.png';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed bg-[#0E0E0E] w-full h-20 border-b z-[100] ease-in-out duration-300'
          : 'fixed bg-[#0E0E0E] w-full h-20 z-[100] '
      }
    >
      <div className='flex justify-between items-center w-full h-full p-8 2xl:px-16'>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='125'
            height='50'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul className='hidden md:flex gap-10'>
            <li className='main-nav'>
              <Link href='/'>Home</Link>
            </li>
            <li className='main-nav'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='main-nav'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='main-nav'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='main-nav'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='main-nav'>
              <Link href='/#contact'> Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur'
            : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000] p-8 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className=''>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src={NavLogo} width='125' height='50' alt='/' />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase mb-4'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  Skills
                </li>
              </Link>
              <Link href='/projects'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='side-nav'>
                  Contact
                </li>
              </Link>
            </ul>
            <div>
              <p className='mb-4 uppercase tracking-widest text-[#FFD000]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link
                  href='https://www.linkedin.com/in/glaizell-a-079497147/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <div className='side-icons'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/glaizell'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <div className='side-icons'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='/#contact'>
                  <div onClick={() => setNav(!nav)} className='side-icons'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link
                  href='https://t.me/glaizell'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <div onClick={() => setNav(!nav)} className='side-icons'>
                    <FaTelegramPlane />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
