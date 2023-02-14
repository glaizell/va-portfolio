import Image from 'next/image';
import selfPhoto from '/public/assets/photo.png';

function AboutMe() {
  return (
    <div id='about' className='w-full p-4 pt-[90px]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='mb-8'>
          <p className='mb-6 uppercase text-xl tracking-widest text-[#FFD000]'>
            About Me
          </p>
          <h2>Who I Am</h2>
        </div>
        <div className='lg:grid grid-cols-3 gap-8 max-w-full'>
          <div className='px-4 leading-normal col-span-2'>
            <p className='mb-8'>
              My name is Glaizell, but you can call me Glai if you prefer. I
              started my educational journey in 2006 studying business
              administration with a major in management, and continued until my
              second year of college. However, due to financial difficulties, I
              was unable to continue my studies and instead decided to work as a
              receptionist at a well-known hotel in Bahrain
            </p>
            <p className='mb-4'>
              After saving some money, I returned to the Philippines with a
              desire to continue my education. With the increasing advancements
              in technology and my growing interest in web development, I
              changed my major to a Bachelor of Science in Information
              Technology. Unfortunately, I dropped out of my third year of
              college due to the COVID-19 outbreak but I continued to self-teach
              and enroll in online courses on Udemy and LinkedIn.
            </p>
            <p className='mb-4'>
              With my diverse background and self-taught skills, I am now
              working as a general virtual assistant, offering a range of
              services, including data entry, online research, web development,
              and email management. I am confident in my abilities and eager to
              continue learning and growing in this field. My goal is to provide
              high-quality and efficient support to help my clients achieve
              their business objectives.
            </p>
          </div>

          <div className='hidden w-full h-auto m-auto shadow-lg p-2 shadow-gray-500 rounded-xl lg:flex items-center justify-center hover:scale-105 ease-in duration-300'>
            <Image src={selfPhoto} alt='selfPhoto' className='rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
