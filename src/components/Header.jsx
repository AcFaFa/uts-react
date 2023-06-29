import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import { GiGalaxy } from "react-icons/gi";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <GiGalaxy size={30} />
        Store Ahmed
      </h3>
      <nav ref={navRef}>
        <a href="/">Beranda</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
