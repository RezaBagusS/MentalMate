import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10 font-poppins shadow-xl lg:pr-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden pr-0">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a href="">FEATURES</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-primary">
          <img src={logo} alt="" className="sm:w-3/12 w-6/12" />
          <p className="sm:block hidden">MentalMate</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a href="">FEATURES</a>
          </li>
          <li>
            <a>CONTACT US</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-primary rounded-lg px-10">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
