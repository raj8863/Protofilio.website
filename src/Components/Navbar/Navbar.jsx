import React, { useState } from "react";
import "./module.Navbar.css";
import { Link } from "react-router-dom";


const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];




const Navbar = () => {
  const [open, setOpen] = useState(false);

 const toggle =()=>setOpen((e)=>!e);
 const close=()=>setOpen(false)


  return (
    <div >

      <header className="navbar">
        <h1 className="logo">RKS</h1>
        {/* Desktop links */}
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
       
        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile dropDowm */}

  <div className={`mobile-menu ${open ? "open" : ""}`} role="dialog" aria-hidden={!open}>
        <nav className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-link" onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>



      </header>

    </div>
  );
};

export default Navbar;
