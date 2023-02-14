import Image from 'next/image';
import React from 'react';
import Design1 from '/public/assets/resumeDesign/circle2.png';
import Design2 from '/public/assets/resumeDesign/arrowup.png';
import Design3 from '/public/assets/resumeDesign/arrowdown.png';
import Design4 from '/public/assets/resumeDesign/circle1.png';

function Resume() {
  return (
    <div className='relative mb-8 max-w-[940px] mx-auto p-12 pt-[120px] bg-[#fff1b3] overflow-hidden text-[#191500]'>
      <div className='absolute top-[-150px] sm:top-[-130px] left-[-220px]  sm:left-[-210px]'>
        <Image src={Design1} alt='image design for resume' />
      </div>
      <div className='absolute top-0 right-[-220px] '>
        <Image src={Design2} alt='image design for resume' />
      </div>
      <div className='absolute  bottom-0  left-[-220px] '>
        <Image src={Design3} alt='image design for resume' />
      </div>

      <div className='absolute bottom-[-180px] right-[-180px]'>
        <Image src={Design4} alt='image design for resume' />
      </div>
      <div>
        <div className='text-center mb-8 bg-[#ffe880] rounded-2xl p-8'>
          <h1 className='mb-6'>Glaizell Abbas</h1>
          <div className='mb-8 rounded-2xl p-2 bg-[#4A4E61] max-w-full sm:w-[70%] lg:w-[60%] mx-auto text-sm md:text-base text-white'>
            <span>General Virtual Assistant</span>
            <span> | </span>
            <span>Web Developer</span>
          </div>
          <p>
            Efficient and detail-oriented virtual assistant with a passion for
            web development and a strong desire to grow in the field. Proficient
            in administrative tasks and familiar with a wide range of software
            and tools, including Microsoft Office, Google Docs, and project
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
          <div className='md:pt-4'>
            <div className='mb-8'>
              <h4 className='mb-2 text-[#191500]'>Education</h4>
              <div className='p-4'>
                <div className='mb-4'>
                  <p className='text-[#4A4E61] mb-2 font-bold'>2017-2020</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p>AMA University</p>
                </div>

                <div className='mb-4'>
                  <p className='text-[#4A4E61] mb-2 font-bold'>2006-2008</p>
                  <p>Business Administration major in Management</p>
                  <p>Holy Angel University</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className='mb-2 text-[#191500]'>Certification</h4>
              <div className='p-4'>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Udemy</h5>
                  <p>Build Responsive Real-World Websites with HTML and CSS</p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Udemy</h5>
                  <p>
                    The Complete JavaScript Course 2022: From Zero to Expert!
                  </p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Udemy</h5>
                  <p>The Complete 2020 Web Development Bootcamp</p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>LinkedIn</h5>
                  <p>Effective Listening</p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>LinkedIn</h5>
                  <p>Managing Stress</p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>LinkedIn</h5>
                  <p>Improving Your Memory</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 md:bg-[#ffe880] rounded-2xl md:p-6'>
            <div className='mb-8'>
              <h4 className='mb-2 text-[#191500]'>Work Experience</h4>
              <div className='p-4'>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Online Research</h5>
                  <p>
                    searching for potential candidates through online platforms
                    such as LinkedIn.
                  </p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Event Promoter</h5>
                  <p>
                    gathering information on upcoming events and searching
                    groups on different online platforms to promote the upcoming
                    events.
                  </p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>
                    Recruitment Researcher / Linkedin recruiter / Company
                    mapping
                  </h5>
                  <p>
                    Tracking the companies to which candidates transfer from or
                    to, and the number of candidates involved in each transfer.
                  </p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-[#4A4E61] mb-2'>Persona mapping</h5>
                  <p>
                    Filtering candidates based on client instructions and
                    entering information into Google Slides
                  </p>
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <h4 className='mb-2 text-[#191500]'>Skills And Tools</h4>
              <div className=''>
                <ul className='mb-6 leading-6 list-disc px-6'>
                  <li>Front-End Coding</li>
                  <li>Data Entry</li>
                  <li>Online Research</li>
                  <li>Email Management</li>
                  <li>WordPress Web Design using Elementor</li>
                  <li>
                    Basic Photo and Video Editing using Photoshop and Premiere
                    Pro
                  </li>
                </ul>
                <h5 className='mb-2'>
                  Proficient in using the following tools:
                </h5>
                <ul className='leading-6 list-disc px-6'>
                  <li>Canva</li>
                  <li>Slack</li>
                  <li>Microsoft tools (Excel, Word, Presentation & Outlook)</li>
                  <li>Google Docs, Sheets, Slides, etc.</li>
                  <li>Viber, WhatsApp, Telegram, Zoom</li>
                  <li>VsCode</li>
                  <li>Notion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
