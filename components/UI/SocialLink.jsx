import React from 'react';

const SocialLink = ({ href, icon, as = 'a' }) => (
  <as
    className='rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-[#FFD000] hover:text-black duration-300'
    href={href}
    target='_blank'
    rel='noreferrer'
  >
    {icon}
  </as>
);

export default SocialLink;
