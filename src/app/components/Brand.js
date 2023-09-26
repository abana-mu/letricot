import Image from 'next/image';

export default function Brand() {
  return (
    <section id='brand' className='grid lg:grid-cols-2 border-b-2 border-black'>
      <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-black  px-4 sm:px-6 lg:px-8 '>
        <div className='sticky top-0 py-8 sm:py-12'>
          <h2 className='title-size mb-8'>Our Brand</h2>
          <div className='text-size space-y-6'>
            <p>
              Atelier Inam is our own brand which we distribute in 2 retail shops in Mauritius and online. We offer a range of cashmere knitwear and a
              made-to-order service personalized to the individual needs of our customers.
            </p>
          </div>
        </div>
      </div>
      <div className='sm:py-12 sm:px-6 lg:px-8 bg-stone-200 '>
        <Image src='/product.jpg' className='w-full h-auto sm:rounded-xl sm:border-2 border-black' width={500} height={500} alt='Picture of the author' />
      </div>
    </section>
  );
}
