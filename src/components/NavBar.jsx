import React, {useEffect, useState} from 'react';
import NavItems from "./NavItems.jsx";

const NavBar = () => {
  const [mQuery, setMQuery] = useState(window.matchMedia("(min-width: 768px)").matches);
  const [burgerIsOpen, setBurgerOpen] = useState(false);

  const handleMediaChange = (e) => {
    setMQuery(e.matches);
  }

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', handleMediaChange);

    return () => window.matchMedia("(min-width: 768px)").removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <div className="navbar">
      {
        mQuery ?
          <ul className="nav">
            <NavItems />
          </ul> :
          <div>
            <div className="burger-container" onClick={() => setBurgerOpen(!burgerIsOpen)}>
              <div className={`burger-btn ${burgerIsOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`burger-navigation ${burgerIsOpen ? 'active' : ''}`}>
              <NavItems />
            </ul>
          </div>
      }
    </div>
  )
};

export default NavBar;