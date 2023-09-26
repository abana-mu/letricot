import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className='fixed h-full w-16 lg:w-24 min-w-[50px] bg-white block border-r-2 border-black px-1 lg:px-3'>
      <h1 className='hidden relative top-56 lg:top-72 -rotate-90 translate-y-full whitespace-nowrap text-2xl lg:text-3xl text-stone-400 font-base tracking-wide'>
        Le Tricot International.
      </h1>

      <Image
        src='/logo-ro.jpg'
        className='w-full mt-4'
        width={500}
        height={500}
        alt='Picture of the author'
      />
    </div>
  );
}
