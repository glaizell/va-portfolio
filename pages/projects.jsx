import Head from 'next/head';
import ProjectList from '@/components/ProjectList';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name='description'
          content='General Virtual Assistant Sample Work'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/favicon.svg' />
      </Head>
      <div className='max-w-[1240px] mx-auto p-4 pt-[120px] mb-8'>
        <div className='mb-12'>
          <p className='mb-6 uppercase text-xl tracking-widest text-[#FFD000]'>
            Projects
          </p>
          <h2>What I&#39;ve Done</h2>
        </div>
        <div className='max-w-full md:w-[80%] lg:w-[60%] mx-auto'>
          <ProjectList />
        </div>
      </div>
    </>
  );
};

export default Projects;
