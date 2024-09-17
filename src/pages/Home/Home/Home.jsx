import useTitle from '../../../hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {
  useTitle('KiddToY | Home Page');
  return (
    <div>
      <div className='bg-gradient-to-r from-violet-200 via-blue-200 to-violet-100'>
        <Banner />
      </div>

      <div className='w-10/12 mx-auto'>
        <Category />
        <PhotoGallery />

        <AboutUs />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
