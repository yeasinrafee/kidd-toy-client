import useTitle from '../../../hooks/useTitle';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import TestimonialSection from '../TestimonialSection/TestimonialSection';

const Home = () => {
  useTitle('KiddToY | Home Page');
  return (
    <div>
      <div className='bg-violet-100'>
        <Banner />
      </div>

      <div className='w-full mx-auto'>
        <div className='w-10/12 mx-auto'>
          <Category />
        </div>

        <div className='bg-violet-100'>
          <TestimonialSection></TestimonialSection>
        </div>

        <FAQ></FAQ>
        <div className='bg-violet-100 py-5'>
          <div className='w-10/12 mx-auto'>
            <PhotoGallery></PhotoGallery>
          </div>
        </div>
        <div className='w-10/12 mx-auto'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
