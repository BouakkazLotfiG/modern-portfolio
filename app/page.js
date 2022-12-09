import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Backend, Frontend, Other } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden '>
    <Navbar />
    <Hero />

    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Projects />
    </div>
    <div className='relative'>
      <Frontend />
      <div className='gradient-04 z-0' />
      <Backend />
    </div>
    <div className='relative'>
      <Other />
      <div className='gradient-03 z-0' />
      <Footer />
    </div>
  </div>
);

export default Page;
