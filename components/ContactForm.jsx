import { useState } from 'react';
import Modal from './UI/Modal';
import { FaWindowClose, FaLongArrowAltRight } from 'react-icons/fa';
import { sendContactForm } from '../lib/api';
import Error from './UI/Error';
import Success from './UI/Success';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: 'font-poppins',
});

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
      <div className={poppins.className}>
        {error && <Error>{error}</Error>}
        {successMessage && <Success>{successMessage}</Success>}
        <div className='relative sm:grid grid-cols-2 w-full overflow-y-scroll max-h-screen'>
          <FaWindowClose
            className='absolute top-0 right-1 text-2xl cursor-pointer shadow-sm shadow-gray-500 hover:scale-105 ease-in duration-300 sm:text-black'
            onClick={props.onHideContactForm}
          />
          <div className=' bg-[#0e0e0e] text-white p-4 sm:flex items-center justify-center flex-col'>
            <p className='mb-4 md:mb-8 text-center uppercase text-[#FFD000]'>
              Let&#39;s Talk
            </p>
            <h1 className='mb-4 md:leading-snug'>I&#8217;M HERE TO HELP YOU</h1>
            <p className='mb-4'>
              You&#8217;re one step closer to making an outstanding brand!
            </p>
          </div>
          <div className='  bg-white text-black p-6'>
            {/* ------------FORM------------ */}
            <form action='' className='md:mt-1' onSubmit={handleSubmit}>
              <div className=''>
                <div className='mb-8'>
                  <label className='form-label' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='form-input-select-textarea'
                    type='text'
                    id='name'
                    name='name'
                    value={values.name}
                    onChange={onChangeHandler}
                    required
                  />
                </div>

                <div className='mb-8'>
                  <label className='form-label' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='form-input-select-textarea'
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={values.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className='mb-8'>
                  <label className='form-label' htmlFor='place'>
                    Country / City
                  </label>
                  <input
                    className='form-input-select-textarea'
                    type='text'
                    id='place'
                    name='country'
                    required
                    value={values.country}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className='mb-8'>
                  <label className='form-label' htmlFor='topic'>
                    How can I help you?
                  </label>
                  <select
                    name='topic'
                    id='topic'
                    className='form-input-select-textarea'
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
              <div className='mb-8 w-full'>
                <label className='form-label' htmlFor='message'>
                  Your Message Here
                </label>
                <textarea
                  className='form-input-select-textarea'
                  name='message'
                  id='message'
                  cols='30'
                  rows='2'
                  required
                  value={values.message}
                  onChange={onChangeHandler}
                ></textarea>
              </div>
              <div className='mb-8 mt-4'>
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
