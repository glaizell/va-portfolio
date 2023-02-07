import { useState } from 'react';
import Modal from './UI/Modal';
import { FaWindowClose, FaLongArrowAltRight } from 'react-icons/fa';
import { sendContactForm } from '../lib/api';
import Error from './UI/Error';
import Success from './UI/Success';

const initValues = { name: '', email: '', topic: '', country: '', message: '' };

function ContactForm(props) {
  const [values, setValues] = useState(initValues);
  const [touched, setTouched] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);
  console.log(error);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmitButton = async () => {
    setValues((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setValues(initValues);
      setSuccessMessage('Form submitted successfully!');
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
      setValues((prev) => ({
        ...prev,
      }));
    }
  };

  return (
    <Modal onClose={props.onHideContactForm}>
      <div>
        {error && <Error>{error}</Error>}
        {successMessage && <Success>{successMessage}</Success>}
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
          <div className=' relative col-span-2 bg-white text-black p-6'>
            <FaWindowClose
              className='absolute top-0 right-1 text-2xl cursor-pointer shadow-md shadow-gray-200 '
              onClick={props.onHideContactForm}
            />

            {/* ------------FORM------------ */}
            <form action='' className='md:mt-1' onSubmit={handleSubmit}>
              <div className='md:grid grid-cols-2 gap-x-6'>
                <div className=' md:mb-12'>
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
                    name='name'
                    value={values.name}
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className=' md:mb-12'>
                  <label
                    className='block md:mb-2 text-gray-400 cursor-pointer font-extralight'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b  outline-none  border-[#141623] md:leading-6 font-medium '
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={values.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className=' md:mb-12'>
                  <label
                    className='block md:mb-2 text-gray-400 cursor-pointer font-extralight'
                    htmlFor='place'
                  >
                    Country / City
                  </label>
                  <input
                    className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b   outline-none  border-[#141623] md:leading-6 font-medium '
                    type='text'
                    id='place'
                    name='country'
                    required
                    value={values.country}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className=' md:mb-12'>
                  <label
                    className='block md:mb-3 text-gray-400 cursor-pointer font-extralight'
                    htmlFor='topic'
                  >
                    How can I help you?
                  </label>
                  <select
                    name='topic'
                    id='topic'
                    className='text-sm md:text-base w-full py-2 px-4 mb-8 border-l-0 border-r-0 border-t-0 border-b outline-none  border-[#141623] md:leading-6 font-medium'
                    required
                    value={values.topic}
                    onChange={onChangeHandler}
                  >
                    <option value='' selected>
                      Please select
                    </option>
                    <option value='Data entry'>Data entry</option>
                    <option value='Online Research'>Online Research</option>
                    <option value='Email management'>Email management</option>
                    <option value='Web development'>Web development</option>
                    <option value='WordPress developer'>
                      WordPress developer
                    </option>
                    <option value='Others'>Others</option>
                  </select>
                </div>
              </div>
              <div className=' md:mb-12 w-full'>
                <label
                  className='block mb-2 text-gray-400 cursor-pointer font-extralight'
                  htmlFor='message'
                >
                  Your Message Here
                </label>
                <textarea
                  className=' w-full sm:py-2 px-4 md:mb-4 border-l-0 border-r-0 border-t-0 border-b  outline-none border-[#141623] sm:leading-6 font-medium '
                  name='message'
                  id='message'
                  cols='30'
                  rows='2'
                  required
                  value={values.message}
                  onChange={onChangeHandler}
                ></textarea>
              </div>
              <div className='mb4 mt-4'>
                <button
                  className='border border-[#141623] py-1 px-3 md:py-2 md:px-6 hover:bg-[#ffd000] hover:text-black text-md font-semibold md:text-1xl cursor-pointer hover:scale-110 ease-in duration-300'
                  onClick={onSubmitButton}
                >
                  Send
                  <span className='ml-4'>
                    <FaLongArrowAltRight className='inline-block' />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ContactForm;
