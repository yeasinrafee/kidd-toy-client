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
    <div className='card w-11/12 h-96 rounded-sm mx-auto bg-base-100 shadow-lg'>
      <figure>
        {/* <img src={picture} alt="toy" /> */}

        <LazyLoadImage
          src={picture}
          className='w-full h-full object-cover'
          alt='Chefs'
          effect='blur'
          delayTime={300}
          delayMethod='throttle'
        />
      </figure>
      <div className='card-body space-y-3'>
        <h2 className='text-xl uppercase tracking-wider font-bold text-violet-500 '>
          {toy_name}
        </h2>
        <p className='text-sm'>
          <span className='font-bold'>Price:</span> ${price}
        </p>
        <div className='flex items-center  gap-1'>
          <span className='font-bold text-sm'>Ratings:</span>
          <Rating
            style={{ maxWidth: 80 }}
            value={Math.round(ratings)}
            readOnly
          />
        </div>
        <div className='  '>
          <Link to={`/toys/${toy?._id}`}>
            <button className='w-full text-white font-semibold tracking-widest uppercase text-base rounded-md bg-gradient-to-r from-violet-500 via-purple-600 to-violet-500 px-6 py-2 hover:from-violet-400 hover:via-purple-500 hover:to-violet-400 duration-200'>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
