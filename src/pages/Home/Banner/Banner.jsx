// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='w-11/12 h-[80vh] mx-auto'>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-[50vh] md:h-[85vh] w-full'
      >
        {/* Slider 1 */}
        <SwiperSlide className='bg-cover flex items-center justify-center'>
          <div className='flex items-center justify-center w-10/12 mx-auto mt-52'>
            <div className='w-full'>
              <h2 className='text-3xl md:text-6xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 pb-9 '>
                Accelerate the <span className='text-black'>Run</span>
              </h2>
              <h2 className=' text-2xl md:text-4xl font-bold mb-2 md:mb-3 '>
                Get your Hands On Premium Car Toys Today
              </h2>
              <p className='w-4/5 md:w-2/3 mt-7 text-xs md:text-base'>
                Welcome to our adrenaline-pumping world of car toys! Discover a
                captivating collection that fuels joy and ignites imaginations.
                From sleek sports cars to rugged off-road monsters, find the
                perfect toy for thrilling adventures. Let the road to
                imagination begin!
              </p>
            </div>
            <div className='w-5/6'>
              <img
                className='w-full h-[380px] object-cover'
                src='/public/images/banner01.webp'
                alt=''
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 2 */}
        <SwiperSlide className='bg-cover flex items-center justify-center'>
          <div className='flex items-center justify-center w-10/12 mx-auto mt-52'>
            <div className='w-full'>
              <h2 className='text-3xl md:text-6xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 pb-9 '>
                Ready, Set, <span className='text-black'>Play!</span>
              </h2>
              <h2 className=' text-2xl md:text-4xl font-bold mb-2 md:mb-3 '>
                Find the Perfect Car Toy for Your Little Speedster.
              </h2>
              <p className='w-4/5 md:w-2/3 mt-7 text-xs md:text-base'>
                Welcome to our adrenaline-pumping world of car toys! Discover a
                captivating collection that fuels joy and ignites imaginations.
                From sleek sports cars to rugged off-road monsters, find the
                perfect toy for thrilling adventures. Let the road to
                imagination begin!
              </p>
            </div>
            <div className='w-5/6'>
              <img
                className='w-full h-[380px] object-cover'
                src='/public/images/banner02.webp'
                alt=''
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 3 */}
        <SwiperSlide className='bg-cover flex items-center justify-center'>
          <div className='flex items-center justify-center w-10/12 mx-auto mt-52'>
            <div className='w-full'>
              <h2 className='text-3xl md:text-6xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 pb-9 '>
                Discover The <span className='text-black'>Play!</span>
              </h2>
              <h2 className=' text-2xl md:text-4xl font-bold mb-2 md:mb-3 '>
                Shop the ultimate car toy Wonderland
              </h2>
              <p className='w-4/5 md:w-2/3 mt-7  text-xs md:text-base'>
                Welcome to our adrenaline-pumping world of car toys! Discover a
                captivating collection that fuels joy and ignites imaginations.
                From sleek sports cars to rugged off-road monsters, find the
                perfect toy for thrilling adventures. Let the road to
                imagination begin!
              </p>
            </div>
            <div className='w-5/6'>
              <img
                className='w-full h-[380px] object-cover'
                src='/public/images/banner03.webp'
                alt=''
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
