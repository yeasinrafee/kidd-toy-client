import { useEffect, useState } from 'react';
import ToyCard from '../../ToyCard/ToyCard';
import { RotatingLines } from 'react-loader-spinner';

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [loader, setLoader] = useState(true);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://assignment11-xi.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  }, [activeTab]);

  if (loader) {
    return (
      <div className='w-1/2 mx-auto my-60'>
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
    <div className='py-4 px-4'>
      <hr className='mt-20 border-2 rounded' />
      <h2 className='text-3xl uppercase text-center font-bold mb-14 mt-16 md:mt-20 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-500'>
        Shop Category
      </h2>
      <div className='flex mb-10 text-2xl justify-center items-center border-red-500 my-5'>
        <div
          onClick={() => handleTab('Sports')}
          className={`tab tab-lifted ${
            activeTab === 'Sports' ? 'tab-active text-violet-500' : ''
          } text-black font-bold`}
        >
          Sports Car
        </div>
        <div
          onClick={() => handleTab('Regular')}
          className={`tab tab-lifted ${
            activeTab === 'Regular' ? 'tab-active text-violet-500' : ''
          } text-black font-bold`}
        >
          Regular Car
        </div>
        <div
          onClick={() => handleTab('Police')}
          className={`tab tab-lifted ${
            activeTab === 'Police' ? 'tab-active text-violet-500' : ''
          } font-bold text-black`}
        >
          Police Car
        </div>
      </div>

      {/* Card Layout */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 w-11/12 mx-auto'>
        {allToys &&
          allToys.slice(0, 4).map((toy, index) => (
            <div
              key={toy._id}
              className={`${
                index < 4 ? 'flex-shrink-0' : 'col-span-1 flex justify-center'
              }`}
            >
              <ToyCard toy={toy} />
            </div>
          ))}
      </div>
      {/* Centering additional cards */}
      <div className='flex justify-center mt-8'>
        {allToys.length > 4 &&
          allToys.slice(4).map((toy) => (
            <div key={toy._id} className='flex-shrink-0 w-full md:w-1/4'>
              <ToyCard toy={toy} />
            </div>
          ))}
      </div>

      <hr className='mt-24 border-2 rounded' />
    </div>
  );
};

export default Category;
