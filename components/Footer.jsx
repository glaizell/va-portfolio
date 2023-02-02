import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className=''>
      <div className='text-center md:flex justify-between items-center p-8 font-light '>
        <div>
          <p className='text-xs mb-2 md:mb-0'>
            Authentic | Creative | Aspirational
          </p>
        </div>
        <div>
          <p className='text-xs mb-4 md:mb-0'>
            @ GLAIZELL ABBAS. ALL RIGHTS RESERVED, 2023
          </p>
        </div>
        <div className='flex gap-4 text-sm justify-center items-center'>
          <div className='rounded-full shadow-sm shadow-gray-500 p-2 cursor-pointer hover:scale-105 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
            <FaFacebook />
          </div>
          <div className='rounded-full shadow-sm shadow-gray-500 p-2 cursor-pointer hover:scale-105 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
            <FaInstagram />
          </div>
          <div className='rounded-full shadow-sm shadow-gray-500 p-2 cursor-pointer hover:scale-105 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
            <FaTwitter />
          </div>
          <div className='rounded-full shadow-sm shadow-gray-500 p-2 cursor-pointer hover:scale-105 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
            <FaLinkedinIn />
          </div>
          <div className='rounded-full shadow-sm shadow-gray-500 p-2 cursor-pointer hover:scale-105 ease-in hover:bg-[#FFD000] hover:text-black  duration-300'>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
