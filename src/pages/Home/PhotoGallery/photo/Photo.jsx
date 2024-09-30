const Photo = ({ photos }) => {
  return (
    <div className='relative rounded-xl w-full h-48 md:h-64 overflow-hidden'>
      <img
        className='object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105'
        src={photos.src}
        alt=''
      />
    </div>
  );
};

export default Photo;
