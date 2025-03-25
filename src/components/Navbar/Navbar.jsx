import "./Navbar.scss";
import logo from "../../assets/logo.png";

import {
  IoMenu,
  IoSearch,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
  IoClose,
} from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <ul>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <IoMenu />
            </li>
            <li className="hide-on-mobile">
              <IoSearch />
            </li>
          </ul>
        </div>
        <div className="center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right hide-on-mobile">
          <ul>
            <li>
              <IoPersonOutline />
            </li>
            <li>
              <IoHeartOutline />
            </li>
            <li>
              <IoCartOutline />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu__header">
          <img src={logo} alt="Logo" />
          <IoClose className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <ul>
          <li><IoSearch /> Search</li>
          <li><IoPersonOutline /> Account</li>
          <li><IoHeartOutline /> Wishlist</li>
          <li><IoCartOutline /> Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
