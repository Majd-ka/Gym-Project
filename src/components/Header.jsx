import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className="m-1 w-40 h-12" />
        {menuOpened === false && mobile === true ? (
          <div
            onClick={() => setMenuOpened(true)}
            className="fixed  right-8 z-50"
          >
            <img
              className="w-10 h-10 cursor-pointer p-2 bg-gray-700 rounded-lg"
              src={Bars}
              alt=""
            />
          </div>
        ) : (
          <ul className="md:flex gap-2 text-white flex flex-col md:flex-row fixed right-8 md:first-letter:right-0 md:relative z-50 bg-gray-700 md:bg-transparent p-4 top-8 md:top-0 rounded-xl">
            <li className=" cursor-pointer hover:text-orange-600">
              <Link to="Home" smooth onClick={() => setMenuOpened(false)}>
                Home
              </Link>
            </li>
            <li className=" cursor-pointer hover:text-orange-600">
              <Link to="Programs" smooth onClick={() => setMenuOpened(false)}>
                Programs
              </Link>
            </li>
            <li className=" cursor-pointer hover:text-orange-600">
              <Link to="Reasons" smooth onClick={() => setMenuOpened(false)}>
                {" "}
                Why us
              </Link>
            </li>
            <li className=" cursor-pointer hover:text-orange-600">
              <Link to="Plans" smooth onClick={() => setMenuOpened(false)}>
                Plans
              </Link>
            </li>
            <li className=" cursor-pointer hover:text-orange-600">
              <Link
                to="Testimonials"
                smooth
                onClick={() => setMenuOpened(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Header;
