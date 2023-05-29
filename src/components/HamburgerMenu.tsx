import { motion } from 'framer-motion';

import { hamburgerVariant } from '../config/animationVariants';
import CloseIcon from '../assets/icons/close.svg';
import { navigationList } from '../config/constants';

interface IHamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: IHamburgerMenuProps) => {
  const handleButtonClick = () => setIsMenuOpen(false);

  return (
    <motion.div
      animate={isMenuOpen ? 'open' : 'closed'}
      initial='closed'
      variants={hamburgerVariant}
      className='fixed top-0 right-0 h-[100dvh]  w-full max-w-[400px] bg-darker z-10 flex flex-col py-10 px-6 md:hidden'
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-white text-2xl font-semibold'>JK</h3>
        <button onClick={handleButtonClick}>
          <img src={CloseIcon} alt='close-icon' className='h-8 w-8' />
        </button>
      </div>

      <ul className='grid place-items-center h-1/2 mt-[40%]'>
        {navigationList.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              onClick={handleButtonClick}
              target={item.id === 2 ? '_blank' : '_self'}
              className='text-white text-lg font-medium'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default HamburgerMenu;
