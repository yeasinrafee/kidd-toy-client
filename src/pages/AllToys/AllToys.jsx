import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { RotatingLines } from 'react-loader-spinner';

const AllToys = () => {
  useTitle('KiddToY | ALL Toys');
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('https://assignment11-xi.vercel.app/alltoys')
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://assignment11-xi.vercel.app/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  };

  if (loader) {
    return (
      <div className='w-1/2 ml-40 md:mx-auto my-60'>
        <RotatingLines
          strokeColor='grey'
          strokeWidth='5'
          animationDuration='0.75'
          width='56'
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className='px-2 md:px-10 py-20 '>
      <div className='flex items-center justify-center'>
        <div className='form-control'>
          <div className='input-group mb-9 w-full max-w-lg'>
            <h3 className='text-xl md:text-2xl md:mt-2 mr-3 md:mr-5'>
              Search Toy:
            </h3>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type='text'
              placeholder='Search…'
              className='input input-bordered'
              name='search'
            />
            <button onClick={handleSearch} className='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <h2 className='text-3xl pl-3 uppercase text-center text-violet-500 mt-5 mb-9'>
        All Toys List:{' '}
      </h2>

      {/* Card Layout for Toys */}
      <div className='grid w-10/12 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {allToys.map((toys) => (
          <div
            key={toys._id}
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col'
          >
            {/* Toy Image */}
            <img
              src={toys?.picture} // Ensure your API provides the image URL
              alt={toys?.toy_name}
              className='w-full h-40 object-cover rounded-t-lg'
            />
            <div className='flex-grow mt-4'>
              <h3 className='text-xl uppercase font-bold text-violet-500'>
                {toys?.toy_name}
              </h3>
              <p className='mt-2 text-gray-700'>Seller: {toys?.seller_name}</p>
              <p className='mt-1 text-gray-700'>
                Sub-category: {toys?.sub_category}
              </p>
              <p className='mt-1 text-gray-700'>Price: $ {toys?.price}</p>
              <p className='mt-1 text-gray-700'>Available: {toys?.quantity}</p>
            </div>
            <Link to={`/toys/${toys?._id}`} className='mt-4'>
              <button className='btn bg-violet-500 text-white hover:bg-violet-600 w-full'>
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
