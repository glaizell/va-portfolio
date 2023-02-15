import Image from 'next/image';
import selfPhoto from '/public/assets/photo.png';

function AboutMe() {
  return (
    <div id='about' className='container'>
      <div>
        <div className='mb-8'>
          <p className='mb-6 uppercase text-xl tracking-widest text-[#FFD000]'>
            About Me
          </p>
          <h2>Who I Am</h2>
        </div>
        <div className='lg:grid grid-cols-3 gap-8 max-w-full md:p-12'>
          <div className='px-4 col-span-2 lg:flex justify-center items-center mt-8 lg:mt-0'>
            <p>
              Hi, my name is Glaizell. As a highly organized and detail-oriented
              virtual assistant, I have extensive experience in data entry,
              online research, and email management. In addition, I&#39;m an
              aspiring web developer and web designer with a passion for HTML,
              CSS, JavaScript, WordPress, Canva, and Photoshop. I am committed
              to providing efficient and high-quality support to help you
              achieve your business objectives. With my strong work ethic and
              dedication to excellence, I am confident that I can help you
              streamline your workflow, boost productivity, and achieve your
              business goals. Let&#39;s work together to take your business to
              the next level!
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
