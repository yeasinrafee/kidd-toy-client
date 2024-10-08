import Photo from './photo/Photo';

const PhotoGallery = () => {
  const photos = [
    {
      src: './images/gallery/gallery5.webp',
      width: 4,
      height: 3,
    },
    {
      src: './images/gallery/gallery6.webp',
      width: 1,
      height: 1,
    },
    {
      src: './images/gallery/gallery7.webp',
      width: 4,
      height: 3,
    },
    {
      src: './images/gallery/gallery8.webp',
      width: 1,
      height: 1,
    },
    {
      src: './images/gallery/gallery9.webp',
      width: 4,
      height: 3,
    },
    {
      src: './images/gallery/gallery10.webp',
      width: 1,
      height: 1,
    },
    {
      src: './images/gallery/gallery11.webp',
      width: 4,
      height: 3,
    },
    {
      src: './images/gallery/gallery12.webp',
      width: 1,
      height: 1,
    },
  ];

  return (
    <div className='w-11/12 md:w-full mx-auto' data-aos='zoom-in-up'>
      {/* Gallery Header */}
      <div className='text-violet-500 lg:text-3xl text-2xl text-center font-bold mt-16 md:mt-16 mb-16 rounded-md'>
        <h2 className='uppercase'>Here is Our Beautiful Collection</h2>
      </div>

      {/* Gallery Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {photos.map((photo) => (
          <Photo key={photo.src} photos={photo} />
        ))}
      </div>

      <hr className='my-20 border-0 rounded' />
    </div>
  );
};

export default PhotoGallery;
