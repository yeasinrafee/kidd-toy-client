// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[50vh] md:h-[85vh] w-full "
      >
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner03.webp")` }}
          className="bg-cover mt-3 "
        >
          <div
            data-aos="fade-right"
            className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl md:text-6xl uppercase font-bold text-violet-500 pb-9 md:pb-20">
              {" "}
              Ready, Set, <span className="text-white">Play!</span>
            </h2>
            <h2 className="text-gray-200 text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center px-5">
              Find the Perfect Car Toy for Your Little Speedster.
            </h2>
            <p className="text-gray-200 w-4/5 md:w-2/3 md:ml-5 text-center text-xs md:text-base">
              Welcome to our adrenaline-pumping world of car toys! Discover a
              captivating collection that fuels joy and ignites imaginations.
              From sleek sports cars to rugged off-road monsters, find the
              perfect toy for thrilling adventures. Let the road to imagination
              begin!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner01.webp")` }}
          className="bg-cover mt-3"
        >
          <div
            data-aos="fade-right"
            className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl md:text-6xl uppercase font-bold text-violet-500 pb-9 md:pb-20">
              {" "}
              <span className="text-white">Accelerate</span> the Fun
            </h2>
            <h2 className="text-gray-200 text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center px-5">
              Get Your Hands on Premium Car Toys Today!
            </h2>
            <p className="text-gray-200 w-4/5 md:w-2/3 md:ml-5 text-center text-xs md:text-base">
              Welcome to our adrenaline-pumping world of car toys! Discover a
              captivating collection that fuels joy and ignites imaginations.
              From sleek sports cars to rugged off-road monsters, find the
              perfect toy for thrilling adventures. Let the road to imagination
              begin!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner02.webp")` }}
          className="bg-cover mt-3"
        >
          <div
            data-aos="fade-right"
            className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl md:text-6xl uppercase font-bold text-violet-500 pb-9 md:pb-20 text-center">
              {" "}
              Discover The <span className="text-white">Thrills</span>
            </h2>
            <h2 className="text-gray-200 text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-center px-5">
              Shop the Ultimate Car Toy Wonderland!
            </h2>
            <p className="text-gray-200 w-4/5 md:w-2/3 md:ml-5 text-center text-xs md:text-base">
              Welcome to our adrenaline-pumping world of car toys! Discover a
              captivating collection that fuels joy and ignites imaginations.
              From sleek sports cars to rugged off-road monsters, find the
              perfect toy for thrilling adventures. Let the road to imagination
              begin!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
