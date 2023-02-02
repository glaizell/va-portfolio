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
          <h2 className='py-4 text-[#fffae6]'>Who I Am</h2>
          <p className='py-2 text-[#fffae6]'>
            Efficient and detail-oriented virtual assistant with 5+ years of
            experience providing administrative and personal support to clients.
            Proficient in a wide range of software and tools, including
            Microsoft Office, Google Suite, and project management tools.
            Excellent organizational, time-management, and communication skills,
            with the ability to work independently and as part of a team.
            Committed to delivering high-quality work in a timely and
            professional manner. Seeking a virtual assistant role where I can
            leverage my skills and experience to support clients and help them
            achieve their goals.
          </p>
          <p>
            Aspiring web developer with a passion for creating innovative and
            engaging websites and web applications. Proficient in HTML, CSS,
            JavaScript, and various front-end frameworks. Experienced in
            developing and maintaining responsive and user-friendly websites.
            Strong problem-solving skills and a keen eye for design. Always
            eager to learn and stay up-to-date with the latest web development
            technologies. Seeking an entry-level web development position in a
            challenging and dynamic environment where I can contribute to the
            creation of high-quality web projects and continue to grow as a
            developer.
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
