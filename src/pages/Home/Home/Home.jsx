import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const Home = () => {
  useTitle("Home Page");
  return (
    <div>
      <Banner />
      <PhotoGallery />
      <Category />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Home;
