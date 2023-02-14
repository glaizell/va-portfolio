import Image from 'next/image';
import Link from 'next/link';

const ProjectItems = ({ id, image, description, file, title }) => {
  return (
    <li key={id} className='projects-container grid sm:grid-cols-2 gap-4'>
      <div className='projects-img'>
        <Image src={image} alt='project image' width={500} height={300} />
      </div>
      <div className='project-details'>
        <h4 className='mb-6'>{title}</h4>
        <p className='mb-8'>{description}</p>
        <Link className='projects-btn' href={file} target='_blank'>
          Visit Link
        </Link>
      </div>
    </li>
  );
};

export default ProjectItems;
