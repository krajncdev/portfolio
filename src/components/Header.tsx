import { Suspense, lazy, useState } from 'react';

import MenuIcon from '../assets/icons/menu.svg';
const HamburgerMenu = lazy(() => import('./HamburgerMenu'));
const Navigation = lazy(() => import('./Navigation'));
// import { Navigation } from '.';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleButtonClick = () => setIsMenuOpen(true);

  return (
    <header className='flex justify-between container my-0 mx-auto py-10 items-center'>
      <h3 className='text-white text-2xl md:text-3xl xl:text-4xl font-semibold'>
        Jaka Krajnc
      </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>

      <button onClick={handleButtonClick} className='md:hidden'>
        <img src={MenuIcon} alt='menu-icon' className='h-8 w-8' />
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </Suspense>
    </header>
  );
};

export default Header;
