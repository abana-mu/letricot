export default function Brand() {
  return (
    <section id='brand' className='grid lg:grid-cols-2 border-b-2 border-black'>
      <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-black  px-4 sm:px-6 lg:px-8 '>
        <div className="sticky top-0 pt-14 pb-14">
        <h2 className='text-left text-5xl lg:text-6xl tracking-wider mb-8'>Our Brand</h2>
        <div className='text-2xl lg:text-3xl lg:leading-normal tracking-wide space-y-6'>
          <p>
            <a href='https://www.atelier-inam.com' target='_blank'>
              Atelier Inam
            </a>{' '}
            is our own brand which we distribute in 2 retail shops in Mauritius and online. We offer a range of cashmere knitwear and a made-to-order
            service personalized to the individual needs of our customers.
          </p>
        </div>
        </div>
      </div>
      <div className='pt-14  pb-14 px-4 sm:px-6 lg:px-8 bg-stone-200 h-[900px]'></div>
    </section>
  );
}
