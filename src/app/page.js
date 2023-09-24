'use client';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Atelier from './components/Atelier';
import Service from './components/Service';
import Brand from './components/Brand';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>

      <Sidebar />
      <div className="ml-16 lg:ml-24">
        <Navbar />
        <main className='mx-auto'>
          <About />
          <Atelier />
          <Service />
          <Brand />
          <Contact />
        </main>
      </div>
    </>
  );
}
