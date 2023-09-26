import Image from 'next/image';

export default function Atelier() {
  return (
    <section id='atelier' className='grid-layout'>
      <div className='grid-title-layout box-x-layout box-y-layout'>
        <h2 className='sticky top-12 title-size'>Our Atelier</h2>
      </div>

      <div className='grid-content-layout box-y-layout'>
        <div className='grid-content-text box-x-layout text-size'>
          <p>
            Our Atelier is situated in Goodlands, Mauritius and our staff have a stunning view of the nearby ocean as they bring your sweaters to
            life. Many of them have been working in knitwear for over 30 years and our team has a unique blend of skills and collective knowledge. We
            are so proud of this rich knitwear heritage.
          </p>
          <p>
            We are committed to keeping our manufacturing in Mauritius, preserving and developing these valuable skills and continuing to provide jobs
            for our communities.
          </p>
        </div>
        <div className='w-full image-x-layout'>
          <Image
            src='/factory.jpg'
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
