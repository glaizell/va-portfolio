import React from 'react';
import data from '../data/data';
import ProjectItems from './ProjectItems';

const ProjectList = () => {
  return (
    <ul>
      {data.map((project) => (
        <ProjectItems
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          file={project.file}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
