import Image from 'next/image';
import selfPhoto from '/public/assets/photo.png';

function AboutMe() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#FFD000]'>
            About Me
          </p>
          <h2 className='py-4 '>Who I Am</h2>
          <p className='py-2 '>
            My name is Glaizell, but you can call me Glai if you prefer. I began
            studying business administration with a major in management when I
            was 16 years old, in 2006, and continued until my second year of
            college, but due to financial problems, I wasn&#39;t able to
            continue and decided to look for work. I also traveled to Bahrain to
            work as a receptionist at a well-known hotel.
          </p>
          <p>
            I returned to the Philippines after saving some money to continue my
            studies (I know it&#39;s a little late for my age, but I believe
            there is no age limit for learning), However, due to technological
            advancements and my interest in web development, I decided to change
            my major to a Bachelor of Science in Information Technology. I
            dropped out of my third year of college due to the COVID-19 outbreak
            and instead self-taught and enrolled in some short online courses on
            Udemy and LinkedIn, where I eventually found work as a general
            virtual assistant.
          </p>
        </div>

        <div className='w-full h-auto m-auto shadow-lg shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src={selfPhoto}
            alt='selfPhoto'
            width='100%'
            height='100%'
            className='rounded-xl'
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
