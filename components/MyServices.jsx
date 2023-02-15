import Image from 'next/image';
import WebDevelopment from '/public/assets/services/WebDevelopment.svg';
import DataEntry from '/public/assets/services/DataEntry.svg';
import EmailManagement from '/public/assets/services/EmailManagement.svg';
import OnlineResearch from '/public/assets/services/OnlineResearch.svg';
import Wordpress from '/public/assets/services/Wordpress.svg';
import VirtualAssistant from '/public/assets/services/VirtualAssistant.svg';

function MyServices() {
  return (
    <div id='skills' className='container'>
      <div>
        <div className='mb-12'>
          <p className='mb-6 uppercase text-xl tracking-widest text-[#FFD000]'>
            Specialized In
          </p>
          <h2>What I Offer</h2>
        </div>
        <div className='max-w-full m-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4'>
          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <DataEntry className='services-svg' />
            </div>
            <div className='py-2 '>
              <h4 className='services-title'>Data Entry</h4>
            </div>
          </div>

          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <OnlineResearch className='services-svg' />
            </div>
            <div className='py-2'>
              <h4 className='services-title'>Online Research</h4>
            </div>
          </div>

          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <EmailManagement className='services-svg' />
            </div>
            <div className='py-2'>
              <h4 className='services-title'>Email Management</h4>
            </div>
          </div>

          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <WebDevelopment className='services-svg' />
            </div>
            <div className='py-2'>
              <h4 className='services-title'>Web Development</h4>
            </div>
          </div>

          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <Wordpress className='services-svg' />
            </div>
            <div className='py-2'>
              <h4 className='services-title'>WordPress Development</h4>
            </div>
          </div>

          <div className='services-grid'>
            <div className='flex justify-center items-center'>
              <VirtualAssistant className='services-svg' />
            </div>
            <div className='py-2'>
              <h4 className='services-title'>General VA Task</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
