export default function About() {
  return (
    <section id='about' className='grid lg:grid-cols-2 border-b-2 border-black'>
      <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-black box-x-layout'>
        <div className='box-y-layout'>
          <h2 className='title-size mb-10'>About Us</h2>
          <div className='text-size space-y-6 lg:space-y-8'>
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
      <div className='box-y-layout box-x-layout bg-stone-200'>
        <iframe
          className='sticky top-10 rounded-lg border-2 border-black w-full aspect-video'
          src='https://www.youtube.com/embed/K-O_o7YqoP8?si=n5im-UVbvuY7K3rW'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
    </section>
  );
}
