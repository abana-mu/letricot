import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Atelier', href: '#atelier' },
  { name: 'Our Service', href: '#service' },
  { name: 'Our Brand', href: '#brand' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white border-b-2 border-black'>
      <nav className='mx-auto flex items-center justify-end p-4 lg:p-6 ' aria-label='Global'>
        <div className='flex space-x-6 lg:hidden'>
          <a
            href='#contact'
            className='group hover:no-underline inline-flex items-center gap-x-1.5 bg-stone-900 uppercase px-3 py-2 text-base font-medium text-gray-50 shadow-sm hover:bg-neutral-800'>
            Contact Us
            <ArrowLongRightIcon className='-mr-0.5 h-5 w-5 group-hover:translate-x-1 transition' />
          </a>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-8 w-8' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-8 xl:gap-x-12'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-xl xl:text-2xl font-medium uppercase leading-6 tracking-wide text-gray-900'>
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex ml-20'>
          <a
            href='#contact'
            className='group hover:no-underline inline-flex items-center gap-x-1.5 bg-stone-900 uppercase px-3 py-2 text-base font-medium text-gray-50 shadow-sm hover:bg-neutral-800'>
            Contact Us
            <ArrowLongRightIcon className='-mr-0.5 h-5 w-5 group-hover:translate-x-1 transition' />
          </a>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <Image src='/logo.jpg' className='w-1/2 max-w-[250px] mt-4' width={500} height={500} alt='Le Tricot Logo' />
            </a>
            <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-8 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 uppercase block rounded-lg px-3 py-2 text-xl tracking-wider font-medium leading-7 text-gray-900 hover:bg-gray-50'
                    onClick={() =>
                      setTimeout(() => {
                        setMobileMenuOpen(false);
                      }, 10)
                    }>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-8'>
                <a
                  href='#contact'
                  className='group hover:no-underline inline-flex items-center gap-x-1.5 bg-stone-900 uppercase px-3 py-2 text-base font-medium text-gray-50 shadow-sm hover:bg-neutral-800'>
                  Contact Us
                  <ArrowLongRightIcon className='-mr-0.5 h-5 w-5 group-hover:translate-x-1 transition' />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
