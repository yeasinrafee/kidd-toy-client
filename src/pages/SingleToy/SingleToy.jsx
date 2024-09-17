import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

// Rating Stars
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';

const SingleToy = () => {
  useTitle('KiddToY | Toy Details');
  const toy = useLoaderData();
  const {
    picture,
    toy_name,
    price,
    ratings,
    seller_name,
    quantity,
    seller_email,
    details,
  } = toy;
  return (
    <div className=' bg-gradient-to-r from-violet-200 via-blue-200 to-violet-100 rounded-md'>
      <h2 className='text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500 font-bold pt-10 md:pt-20 mb-5 md:mb-0'>
        Toy Details
      </h2>

      <div className='flex flex-col md:flex-row justify-center items-center px-5 md:gap-32 md:p-20'>
        <div className='w-full md:w-1/2'>
          {' '}
          <img
            src={picture}
            className=' w-full h-96  rounded-lg shadow-2xl opacity-80'
          />
        </div>
        <div className='w-full md:w-1/3 '>
          <h1 className='text-2xl mt-5 md:text-4xl font-bold text-gray-700'>
            {toy_name}
          </h1>
          <div className='mt-5 space-y-4'>
            <p className='mb-2'>
              <span className='font-semibold'>Seller Name: </span>
              {seller_name}
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>Seller Email:</span>{' '}
              {seller_email}
            </p>
            <p>
              <span className='font-semibold'>Quantity:</span> {quantity}
            </p>
          </div>
          <p className='py-6 text-gray-700'>
            <span className='font-semibold text-black'>Details: </span>{' '}
            {details}
          </p>

          <div className='flex items-center gap-9 pb-9'>
            <div className='flex items-center gap-3'>
              <span className='font-semibold'>Ratings:</span>
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(ratings)}
                readOnly
              />
            </div>
            <p>
              <span>
                <span className='font-bold'>Price: </span>${price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
