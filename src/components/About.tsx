import { SectionWrapper } from '.';
import { helloParagraph } from '../config/constants';

const About = () => {
  return (
    <SectionWrapper title="Hello, I'm Jaka." id='about'>
      <p className='text-white opacity-80'>{helloParagraph}</p>
    </SectionWrapper>
  );
};

export default About;
