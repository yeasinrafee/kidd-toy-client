import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <PhotoGallery />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Home;
