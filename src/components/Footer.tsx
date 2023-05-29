import { Icon } from '.';
import { socialsList } from '../config/constants';

const Footer = () => {
  return (
    <footer className='bg-darker mt-40 flex justify-center py-20'>
      <div className='container flex flex-col items-center gap-4'>
        <div className='flex justify-between items-center max-w-[400px] w-full'>
          <p className='text-xl text-white'>Let's talk</p>
          <ul className='flex gap-4'>
            {socialsList.map((social) => (
              <li key={social.id}>
                <a href={social.url} target='_blank'>
                  <Icon src={social.img} alt={social.alt} size='lg' />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className='text-white'>
          Copyright @2023 Jaka Krajnc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
