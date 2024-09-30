import useTitle from '../../../hooks/useTitle';

const AboutUs = () => {
  useTitle('KiddToY | About Us');
  return (
    <div className='my-28  rounded-sm'>
      <h2 className='text-3xl uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 font-bold pt-20 mb-5 md:mb-0'>
        About Us
      </h2>
      <div className='flex flex-col md:flex-row justify-around items-center px-5 md:gap-16 md:p-20'>
        <div className='w-full md:w-1/2'>
          {' '}
          <img
            src='./images/about.webp'
            className=' w-full h-96 object-cover rounded-lg shadow-2xl opacity-80'
          />
        </div>
        <div className='w-full md:w-1/2 space-y-7'>
          <h1 className='text-2xl mt-5 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500'>
            Learn About KiddToY
          </h1>
          <p className='py-6 text-gray-400'>
            Our toy cars are made from high-quality materials and are designed
            to withstand even the roughest play. They are also safe for children
            of all ages, so you can rest assured knowing that your kids are
            playing with the best.
          </p>
          <button className='btn btn-primary bg-violet-500 border-none mb-9'>
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
