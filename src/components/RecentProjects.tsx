import { SectionWrapper } from '.';
import { projectList } from '../config/constants';
import ProjectListCard from './ProjectListCard';

const RecentProjects = () => {
  return (
    <SectionWrapper title='Recent Projects' id='projects'>
      <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectList.map((project) => (
          <ProjectListCard project={project} key={project.id} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default RecentProjects;
