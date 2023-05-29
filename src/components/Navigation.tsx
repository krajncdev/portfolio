import { navigationList } from '../config/constants';

const Navigation = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-6 '>
        {navigationList.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              target={item.id === 2 ? '_blank' : '_self'}
              className={`text-white px-2 py-1.5 font-medium ${
                item.id === 3 && 'bg-primary rounded-lg'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
