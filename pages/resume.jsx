import Image from 'next/image';
import React from 'react';
import Design1 from '/public/assets/resumeDesign/4.png';
import Design2 from '/public/assets/resumeDesign/7.png';
import Design3 from '/public/assets/resumeDesign/6.png';
import Design4 from '/public/assets/resumeDesign/3.png';

function Resume() {
  return (
    <div className='relative mb-8 max-w-[940px] mx-auto p-12 pt-[120px] bg-black overflow-hidden'>
      <div className='absolute top-[-130px]  left-[-210px]'>
        <Image src={Design1} alt='/' />
      </div>
      <div className='absolute top-0 right-[-220px] '>
        <Image src={Design2} alt='/' />
      </div>
      <div className='absolute  bottom-0  left-[-220px] '>
        <Image src={Design3} alt='/' />
      </div>

      <div className='absolute  bottom-[-180px]  right-[-180px]'>
        <Image src={Design4} alt='/' />
      </div>
      <div>
        <div className='text-center mb-8'>
          <h1 className='mb-6'>Glaizell Abbas</h1>
          <div className='mb-8 rounded-3xl p-2 bg-[#FFD000] max-w-full sm:w-[60%] mx-auto text-black text-sm md:text-base'>
            <span>General Virtual Assistant</span>
            <span> | </span>
            <span>Web Developer</span>
          </div>
          <p className='text-sm md:text-base'>
            Efficient and detail-oriented virtual assistant with a passion for
            web development and a strong desire to grow in the field. Proficient
            in administrative tasks and familiar with a wide range of software
            and tools, including Microsoft Office, Google Suite, and project
            management tools. Experienced in HTML, CSS, JavaScript, and various
            front-end frameworks, with a strong eye for design and user
            experience. Excellent organizational, time-management, and
            communication skills, with the ability to work independently and as
            part of a team. Committed to delivering high-quality work in a
            timely and professional manner. Seeking a virtual assistant or
            entry-level web development position in a challenging and dynamic
            environment where I can utilize my skills and continue to grow in
            the industry.
          </p>
        </div>
        <div className='md:grid grid-cols-3 '>
          <div className='md:p-8'>
            <div className='mb-8'>
              <h3 className='mb-6 text-[#FFD000]'>Education</h3>
              <div className='p-4 text-sm md:text-base'>
                <div className='mb-4'>
                  <p>2019-2022</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p>AMA University</p>
                </div>

                <div className='mb-4'>
                  <p>2019-2022</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p>AMA University</p>
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='mb-6 text-[#FFD000]'>Skills</h3>
              <div className='grid grid-cols-2 p-4 gap-4 text-sm md:text-base'>
                <ul className=' leading-8'>
                  <li>Photoshop1</li>
                  <li>WordPress</li>
                  <li>Photoshop</li>
                  <li>WordPress</li>
                </ul>
                <ul className=' leading-8'>
                  <li>Photoshop</li>
                  <li>WordPress</li>
                  <li>Photoshop</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-2 md:bg-[#CC4569] rounded-2xl md:p-8'>
            <div>
              <h3 className='mb-6 text-[#FFD000]'>Work Experience</h3>
              <div className='p-4 text-sm md:text-base'>
                <div className='mb-4'>
                  <h5>Web developer</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>

                <div className='mb-4'>
                  <h5>Web developer</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>

                <div className='mb-4'>
                  <h5>Web developer</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className='mb-6 text-[#FFD000]'>Certification</h3>
              <div className='p-4 text-sm md:text-base'>
                <div>
                  <h5>Udemy</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <h5>Udemy</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <h5>Udemy</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
