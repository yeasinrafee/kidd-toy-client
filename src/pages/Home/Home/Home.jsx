import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const Home = () => {
  useTitle("KiddToY | Home Page");
  return (
    <div>
      <Banner />
      <Category />
      <PhotoGallery />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Home;
