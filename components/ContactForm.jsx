import React from 'react';
import Modal from './Modal';
import { FaWindowClose, FaLongArrowAltRight } from 'react-icons/fa';

function ContactForm(props) {
  return (
    <Modal onClose={props.onHideContactForm}>
      <div className=' bg-[#0e0e0e] flex justify-between '></div>
      <div className='sm:grid grid-cols-3 w-full h-screen'>
        <div className='hidden bg-[#0e0e0e] text-white p-4 sm:flex items-center justify-center flex-col'>
          <p className='mb-4 uppercase text-[#FFD000]'> Let&#39;s Talk</p>
          <h2 className='text-1xl md:text-4xl mb-4 md:leading-10'>
            I&#8217;M HERE TO HELP YOU
          </h2>
          <p className='mb-4'>
            You&#8217;re one step closer to making an outstanding brand!
          </p>
        </div>
        <div className=' relative col-span-2 bg-white text-black py-6 px-6 lg:px8'>
          <FaWindowClose
            className='absolute top-0 right-1 text-2xl cursor-pointer shadow-md shadow-gray-200 '
            onClick={props.onHideContactForm}
          />
          <form action='' className='md:mt-4 > '>
            <div className='md:grid grid-cols-2 gap-x-6'>
              <div className='md:mb4'>
                <label
                  className='block md:mb-2 text-gray-400 cursor-pointer font-extralight'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b  outline-none  border-[#141623] md:leading-6 font-medium '
                  type='text'
                  id='name'
                />
              </div>
              <div className='mb4'>
                <label
                  className='block md:mb-2 text-gray-400 cursor-pointer font-extralight'
                  htmlFor=''
                >
                  Email
                </label>
                <input
                  className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b  outline-none  border-[#141623] md:leading-6 font-medium '
                  type='email'
                />
              </div>
              <div className='mb4'>
                <label
                  className='block md:mb-2 text-gray-400 cursor-pointer font-extralight'
                  htmlFor=''
                >
                  Country / City
                </label>
                <input
                  className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b   outline-none  border-[#141623] md:leading-6 font-medium '
                  type='text'
                />
              </div>
              <div className='mb4'>
                <label
                  className='block md:mb-3 text-gray-400 cursor-pointer font-extralight'
                  htmlFor=''
                >
                  How can I help you?
                </label>
                <select
                  name=''
                  id=''
                  className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b outline-none  border-[#141623] md:leading-6 font-medium'
                >
                  <option value='' selected>
                    Please select
                  </option>
                  <option value=''>Data entry</option>
                  <option value=''>Online Research</option>
                  <option value=''>Email management</option>
                  <option value=''>Web development</option>
                  <option value=''>WordPress developer</option>
                  <option value=''>Others</option>
                </select>
              </div>
            </div>
            <div className='mb4 w-full'>
              <label
                className='block mb-2 text-gray-400 cursor-pointer font-extralight'
                htmlFor=''
              >
                Your Message Here
              </label>
              <textarea
                className=' w-full sm:py-2 px-4 md:mb-8 border-l-0 border-r-0 border-t-0 border-b  outline-none border-[#141623] sm:leading-6 font-medium '
                name=''
                id=''
                cols='30'
                rows='2'
              ></textarea>
            </div>
            <div className='mb4 mt-4'>
              <button className='border border-[#141623] py-2 px-3 md:py-3 md:px-6 hover:bg-[#ffd000] hover:text-black text-md font-semibold md:text-1xl cursor-pointer hover:scale-110 ease-in duration-300'>
                Send
                <span className='ml-4'>
                  <FaLongArrowAltRight className='inline-block' />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ContactForm;
