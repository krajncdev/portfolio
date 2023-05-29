import { Button } from '.';
import MeImage from '../assets/me.png';
import { heroParagraph } from '../config/constants';

const Hero = () => {
  return (
    <section className='flex items-center flex-col-reverse md:grid md:grid-cols-2 md:justify-items-center mt-8 md:mt-16 lg:mt-20 xl:mt-24 md:place-items-start'>
      <div>
        <h1 className='text-primary font-semibold text-2xl md:text-5xl xl:text-7xl mt-12 md:mt-0 md:max-w-[10ch]'>
          Fullstack Developer.
        </h1>
        <p className='mt-4 text-sm lg:text-base text-white opacity-80'>
          {heroParagraph}
        </p>
        <Button className='mt-12 md:mt-20'>
          <a href='#contact'>Hire me</a>
        </Button>
      </div>
      <img
        src={MeImage}
        alt='image-of-me'
        className='w-2/3 aspect-square relative -top-4 object-contain rounded-full'
      />
    </section>
  );
};

export default Hero;
