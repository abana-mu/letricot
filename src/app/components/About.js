export default function About() {
  return (
    <section id='about' className='grid lg:grid-cols-2 border-b-2 border-black'>
      <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-black px-4 sm:px-6 lg:px-10 '>
        <div className='sticky top-0 py-16'>
          <h2 className='text-left text-5xl xl:text-6xl tracking-wider mb-10'>About Us</h2>

          <div className='text-2xl xl:text-3xl xl:leading-normal tracking-wide space-y-8'>
            <p>For the past four decades we have been manufacturing knitwear for renowned European brands.</p>
            <p>
              There is something tactile and emotional about knitwear. We get attached to a sweater in ways that we don’t always do with other
              clothing. Perhaps this is because there is something raw and organic about knitwear that brings us closer to the origin of clothing, by
              emphasizing textures and the yarns that are used to make it.
            </p>
            <p>This is the essence of Le Tricot International: </p>
            <p className='italic bg-stone-100 p-3 border-l-4 border-stone-300'>
              Products where the hand of the maker is evident and the quality of the materials is celebrated.
            </p>
          </div>
        </div>
      </div>
      <div className='pt-14  pb-14 px-4 sm:px-6 lg:px-8 bg-stone-200'></div>
    </section>
  );
}
