import { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle, FaSearch } from 'react-icons/fa'; // Import FaSearch for the search icon
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null); // Create a reference for the dropdown menu

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const navMenu = (
    <>
      <li className='mr-6'>
        <Link to='/'>Home</Link>
      </li>
      <li className='mr-6'>
        <Link to='/about'>About</Link>
      </li>
      <li className='mr-6'>
        <Link to='/allToys'>All Toys</Link>
      </li>

      <li className='flex items-center mr-2'>
        <div className='relative'>
          <input
            className='py-2 px-6 w-64 rounded-full bg-gray-200 text-black focus:outline-none'
            type='search'
            placeholder='Search toys...'
          />
          <FaSearch
            className='absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer'
            size={16}
          />
        </div>
      </li>
    </>
  );

  return (
    <div className='bg-violet-500'>
      <div className='navbar h-24 w-11/12 mx-auto text-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-500 rounded-box w-52'
            >
              {navMenu}
            </ul>
          </div>
          <Link className='btn btn-ghost normal-case'>
            <h2 className='text-4xl font-bold mb-5'>KiddToY</h2>
          </Link>
        </div>
        <div className='navbar-end hidden items-center lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navMenu}</ul>

          {/* If user is logged in, show user image with dropdown */}
          {user ? (
            <div className='relative' ref={dropdownRef}>
              <Tippy content={user?.displayName}>
                <div onClick={handleDropdownToggle} className='cursor-pointer'>
                  {user?.photoURL ? (
                    <img
                      className='w-10 h-10 rounded-full'
                      src={user.photoURL}
                      alt='User Image'
                    />
                  ) : (
                    <FaUserCircle className='text-2xl' />
                  )}
                </div>
              </Tippy>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className='absolute right-0 z-50 mt-4 w-48 bg-white text-black rounded-lg shadow-lg'>
                  <li className='px-4 py-2 hover:bg-gray-200'>
                    <Link to='/myToys'>My Toys</Link>
                  </li>
                  <li className='px-4 py-2 hover:bg-gray-200'>
                    <Link to='/addAToy'>Add A Toy</Link>
                  </li>
                  <li className='px-4 py-2 hover:bg-gray-200'>
                    <button onClick={() => logOut()}>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <ul>
              <li className=''>
                <Link to='/login'>
                  <button className='px-7 py-1 bg-white rounded-lg text-violet-500 hover:border hover:border-white   hover:bg-violet-500 hover:text-white duration-300'>
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
