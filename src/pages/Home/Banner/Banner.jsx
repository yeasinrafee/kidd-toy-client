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
    <div className="bg-violet-50">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[85vh] w-full"
      >
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner03.jpg")` }}
          className="bg-cover mt-2"
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner01.jpg")` }}
          className="bg-cover mt-2"
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url("./images/banner02.jpg")` }}
          className="bg-cover mt-2"
        >
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
