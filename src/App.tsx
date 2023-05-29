import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const RecentProjects = lazy(() => import('./components/RecentProjects'));
const Tooling = lazy(() => import('./components/Tooling'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className='container md:px-24 my-0 mx-auto'>
        <Suspense fallback={<div>Loading..</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RecentProjects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Tooling />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
