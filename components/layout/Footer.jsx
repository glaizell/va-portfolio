import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className=''>
      <div className='text-center lg:flex justify-between items-center p-2 font-light '>
        <div className='flex justify-center items-center'>
          <p className='text-xs mb-2 lg:mb-0'>
            Ambitious | Adaptable | Artistic
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-xs mb-4 lg:mb-0'>
            @ GLAIZELL ABBAS. ALL RIGHTS RESERVED, 2023
          </p>
        </div>
        <div className='flex gap-4 text-sm justify-center items-center'>
          <Link
            href='https://www.facebook.com/glaizell20'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='footer-icons'>
              <FaFacebook />
            </div>
          </Link>
          <Link
            href='https://t.me/glaizell'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='footer-icons'>
              <FaTelegramPlane />
            </div>
          </Link>
          <Link
            href='https://twitter.com/_glaizell'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='footer-icons'>
              <FaTwitter />
            </div>
          </Link>
          <Link
            href='https://www.linkedin.com/in/glaizell-a-079497147/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='footer-icons'>
              <FaLinkedinIn />
            </div>
          </Link>
          <Link
            href='https://github.com/glaizell'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='footer-icons'>
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
