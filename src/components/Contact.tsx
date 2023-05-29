import { SectionWrapper } from '.';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <SectionWrapper title='Contact me' id='contact'>
      <p className='text-white text-center md:text-lg'>
        Do you want to work with me? Send me an email.
      </p>
      <ContactForm />
    </SectionWrapper>
  );
};

export default Contact;
