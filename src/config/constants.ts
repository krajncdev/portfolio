// Type imports
import {
  INavigationListItem,
  IProject,
  ISocialListItem,
  IToolingListItem,
} from './types';

// Image imports
import ExpressIcon from '../assets/icons/express.svg';
import SqlIcon from '../assets/icons/sql.svg';
import ReactIcon from '../assets/icons/react.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import TypescriptIcon from '../assets/icons/ts.svg';
import NextJSIcon from '../assets/icons/nextjs.svg';
import TailwindCSSIcon from '../assets/icons/tailwindcss.svg';
import MongoDBIcon from '../assets/icons/mongodb.svg';
import PythonIcon from '../assets/icons/python.svg';
import FigmaIcon from '../assets/icons/figma.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import GithubIcon from '../assets/icons/github.svg';

import MonsterCatWebsiteImage from '../assets/monstercat.png';
import PasoviWebsiteImage from '../assets/pasovi.png';
import UnsplashWebsiteImage from '../assets/unsplash.png';

export const navigationList: INavigationListItem[] = [
  { id: 0, name: 'About', path: '#about' },
  { id: 1, name: 'Projects', path: '#projects' },
  { id: 2, name: 'Resume', path: '/cv.pdf' },
  { id: 3, name: 'Contact', path: '#contact' },
];

export const toolingList: IToolingListItem[] = [
  { id: 0, name: 'React', icon: ReactIcon },
  { id: 1, name: 'SQL', icon: SqlIcon },
  { id: 2, name: 'Javascript', icon: JavascriptIcon },
  { id: 3, name: 'Typescript', icon: TypescriptIcon },
  { id: 4, name: 'NextJS', icon: NextJSIcon },
  { id: 5, name: 'TailwindCSS', icon: TailwindCSSIcon },
  { id: 6, name: 'MongoDB', icon: MongoDBIcon },
  { id: 7, name: 'Python', icon: PythonIcon },
  { id: 8, name: 'Express', icon: ExpressIcon },
  { id: 9, name: 'Figma', icon: FigmaIcon },
];

export const socialsList: ISocialListItem[] = [
  {
    id: 0,
    img: InstagramIcon,
    alt: 'instagram-icon',
    url: 'https://www.instagram.com/jaka.krajnc/',
  },
  {
    id: 1,
    img: GithubIcon,
    alt: 'github-icon',
    url: 'https://github.com/krajncdev',
  },
];

export const projectList: IProject[] = [
  {
    id: 0,
    title: 'E-commerce pasovi',
    paragraph:
      'E-commerce pasovi is a web store where you can buy belts for the accordion',
    webUrl: 'https://pasovi.vercel.app/',
    gitUrl: 'https://github.com/krajncdev/pasovi',
    img: PasoviWebsiteImage,
  },
  {
    id: 1,
    title: 'Unsplash clone',
    paragraph:
      'It is exactly as the title suggests. I built an Unsplash clone.',
    webUrl: 'https://unsplash-lyart.vercel.app/',
    gitUrl: 'https://github.com/krajncdev/unsplash',
    img: UnsplashWebsiteImage,
  },
  {
    id: 2,
    title: 'MonsterCat release clone',
    paragraph:
      'It is exactly as the title suggests. I built an Monster cat album release clone.',
    webUrl: 'https://monstercat-album-release.vercel.app/',
    gitUrl: 'https://github.com/krajncdev/monstercat-album-release',
    img: MonsterCatWebsiteImage,
  },
];

export const heroParagraph =
  'I like to make new and challenging projects. I enjoy working in React but I would also like to get better at other libraries and languages.';

export const helloParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin arcu dui, in venenatis urna vestibulum ut. Praesent rutrum orci nisl, non aliquam mi malesuada sed. Mauris suscipit augue at consequat porttitor. In vitae purus malesuada, aliquam ';
