import Image from 'next/image';
import WebDevelopment from '/public/assets/services/WebDevelopment.svg';
import DataEntry from '/public/assets/services/DataEntry.svg';
import EmailManagement from '/public/assets/services/EmailManagement.svg';
import OnlineResearch from '/public/assets/services/OnlineResearch.svg';
import Wordpress from '/public/assets/services/Wordpress.svg';

function MyServices() {
  return (
    <div id='skills' className='w-full p-2 py-16'>
      <div className='max-w-[1240px] m-auto'>
        <div>
          <p className='uppercase text-xl tracking-widest text-[#FFD000]'>
            Specialized In
          </p>
          <h2 className='py-8 ]'>What I Offer?</h2>

          <div className='md:max-w-5xl max-w-sm m-auto '>
            <div className='border  p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div>
                <DataEntry className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Data Entry</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  laborum porro accusantium omnis tempora. Delectus?
                </p>
              </div>
            </div>

            <div className='border  p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Online Research</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  laborum porro accusantium omnis tempora. Delectus?
                </p>
              </div>
              <div>
                <OnlineResearch className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div>
                <EmailManagement className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Email Management</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  laborum porro accusantium omnis tempora. Delectus?
                </p>
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Web Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  laborum porro accusantium omnis tempora. Delectus?
                </p>
              </div>
              <div>
                <WebDevelopment className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div>
                <Wordpress className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>WordPress Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  laborum porro accusantium omnis tempora. Delectus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
