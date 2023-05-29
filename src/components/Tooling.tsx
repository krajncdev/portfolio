import { motion } from 'framer-motion';

import { Icon, SectionWrapper } from '.';
import { toolingList } from '../config/constants';

const Tooling = () => {
  return (
    <SectionWrapper title='Tooling' id='tooling'>
      <motion.ul
        initial={{ y: '50%', opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'
      >
        {toolingList.map((item) => (
          <li key={item.id} className='flex gap-4 items-center'>
            <Icon src={item.icon} alt={item.name} size='xl' />
            <p className='text-base md:text-xl xl:text-2xl text-white text-medium'>
              {item.name}
            </p>
          </li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
};

export default Tooling;
