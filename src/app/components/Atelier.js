export default function Atelier() {
  return (
    <section id='atelier' className='grid lg:grid-cols-4 border-b-2 border-black'>
      <div className="lg:border-r-2 lg:border-black pt-14 lg:pb-14 px-4 sm:px-6 lg:px-8">
      <h2 className='text-left text-5xl lg:text-6xl font-base tracking-wider mb-8'>Our Atelier</h2>
      </div>
      <div className="col-span-3 text-2xl lg:text-3xl lg:leading-normal tracking-wide space-y-6 lg:pt-14 pb-14 px-4 sm:px-6 lg:px-8">
        <p>
          Our Atelier is situated in Goodlands, Mauritius and our staff have a stunning view of the nearby ocean as they bring your sweaters to life.
          Many of them have been working in knitwear for over 30 years and our team has a unique blend of skills and collective knowledge. We are so
          proud of this rich knitwear heritage.
        </p>
        <p>
          We are committed to keeping our manufacturing in Mauritius, preserving and developing these valuable skills and continuing to provide jobs
          for our communities.
        </p>
      </div>
    </section>
  );
}
