import "./Navbar.scss";
import whiteLogo from "../../assets/white_logo.png";
import blueLogo from "../../assets/blu_logo.png";
import { useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 700); // You can tweak the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
          <img src={scrolled ? whiteLogo : blueLogo} alt="Logo" />
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
        <img src={scrolled ? whiteLogo : blueLogo} alt="Logo" />
          <IoClose className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <ul>
          <li>
            <IoSearch /> Search
          </li>
          <li>
            <IoPersonOutline /> Account
          </li>
          <li>
            <IoHeartOutline /> Wishlist
          </li>
          <li>
            <IoCartOutline /> Cart
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
