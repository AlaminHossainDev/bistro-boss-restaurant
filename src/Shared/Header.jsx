import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Header = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <a>Our Menu</a>
        </Link>
      </li>
      <li>
        <Link to="/order">
          <a>order</a>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </li>
    </>
  );
  return (
    <div className="!w-full">
      <div className="navbar bg-black fixed z-20 bg-opacity-15 text-white container mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <div className="flex justify-start items-center">
            <Link to="/">
              <img
                src="https://i.ibb.co/Bt4QTWM/Bisto-boss.png"
                className="w-16"
                alt=""
              />
              <a className="text-xl">Bistro Boss</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
