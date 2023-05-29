import { motion } from 'framer-motion';

import { IProject } from '../config/types';
import OpenNewIcon from '../assets/icons/open-new.svg';
import GitHubIcon from '../assets/icons/github.svg';
import { Icon } from '.';

interface IProjectListCardProps {
  project: IProject;
}

const ProjectListCard = ({
  project: { gitUrl, img, paragraph, title, webUrl, id },
}: IProjectListCardProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: '-50%' }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: id * 0.25 }}
      className='bg-darker flex flex-col items-center justify-between p-4 rounded-md'
    >
      <div>
        <img src={img} alt={title} className='w-full' />
        <h4 className='text-white text-xl font-semibold mt-8 text-center'>
          {title}
        </h4>
        <p className='text-white opacity-80 mt-2'>{paragraph}</p>
      </div>

      <div className='flex justify-between items-center w-full mt-8 '>
        <a href={webUrl} target='_blank' className='flex gap-4 items-center'>
          <p className='text-primary text-lg font-semibold'>Check it out</p>
          <Icon src={OpenNewIcon} alt='open-new-window-icon' />
        </a>
        <a href={gitUrl} target='_blank'>
          <Icon src={GitHubIcon} alt='git-hub-logo' />
        </a>
      </div>
    </motion.li>
  );
};

export default ProjectListCard;
