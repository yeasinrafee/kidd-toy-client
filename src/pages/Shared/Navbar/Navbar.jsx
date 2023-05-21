import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/addToys">Add A Toy</Link>
          </li>
          <li>
            {
              <Tippy content={user && user?.displayName}>
                {user?.photoURL ? (
                  <img
                    className="w-[65px] h-[60px] rounded-full"
                    src={user.photoURL}
                    alt="User Image"
                  />
                ) : (
                  <Link to="/user">
                    <FaUserCircle className="text-2xl" />
                  </Link>
                )}
              </Tippy>
            }
          </li>
          <li className="border rounded-md hover:bg-violet-800">
            <button onClick={() => logOut()}>Logout</button>
          </li>
        </>
      ) : (
        <li className="border rounded-md hover:bg-violet-800">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar h-28 mb-3 bg-violet-500 text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-500 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case">
          <h2 className="text-4xl font-bold mb-5">KiddToY</h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
