import { Link } from 'react-router-dom';

// Rating Stars
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';

// for lazy image
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ToyCard = ({ toy }) => {
  const { picture, toy_name, price, ratings } = toy || {};
  return (
    <div className='card w-11/12 rounded-sm mx-auto bg-base-100 shadow-xl'>
      <figure>
        {/* <img src={picture} alt="toy" /> */}

        <LazyLoadImage
          src={picture}
          className='w-full h-64 object-cover'
          alt='Chefs'
          effect='blur'
          delayTime={300}
          delayMethod='throttle'
        />
      </figure>
      <div className='card-body space-y-2'>
        <h2 className='text-2xl font-bold text-violet-500 '>{toy_name}</h2>
        <p>
          <span className='font-bold'>Price:</span> ${price}
        </p>
        <div className='flex items-center gap-1'>
          <span className='font-bold'>Ratings:</span>
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(ratings)}
            readOnly
          />
        </div>
        <div className=' '>
          <Link to={`/toys/${toy?._id}`}>
            <button className='w-full text-white font-semibold rounded-md bg-gradient-to-r from-violet-500 via-purple-600 to-violet-500 px-6 py-2 hover:from-violet-400 hover:via-purple-500 hover:to-violet-400 duration-200'>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
