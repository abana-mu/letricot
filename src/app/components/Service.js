import Image from 'next/image';

export default function Service() {
  return (
    <section id='service' className='grid-layout'>
      <div className='grid-title-layout box-x-layout box-y-layout'>
        <h2 className='sticky top-12 title-size'>Our Service</h2>
      </div>
      <div className='grid-content-layout box-y-layout'>
        <div className='grid-content-text box-x-layout text-size'>
          <p>
            Our Atelier and studio design culture allows us to design and produce knitwear in very small batches and in short lead times. We focus on
            producing premium knitwear and accessories and offer a wide range of styles in cashmere and other luxurious yarns from the finest Italian
            suppliers.
          </p>
        </div>
        <div className='w-full image-x-layout'>
          <Image
            src='/service.jpg'
            className='w-full h-auto sm:rounded-xl border-t-2 sm:border-2 border-black'
            width={500}
            height={500}
            loading="eager"
            alt='Picture of the author'
          />
        </div>
      </div>
    </section>
  );
}
