import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { BiNetworkChart } from "react-icons/bi";
// import { Gi3DGlasses } from "react-icons/gi";
import { GrClose, GrMenu } from "react-icons/gr";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 180);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="assets/12.png" alt="..." />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Start</Link>
              </li>
              <li>
                <Link to="/protesty">Protesty</Link>
              </li>
              <li>
                <Link to="/reakcja">Reakcja</Link>
              </li>
              <li>
                <Link to="/opinie">Opinie</Link>
              </li>
              <li>
                <Link to="/karykatury">Karykatury</Link>
              </li>
              <li>
                <Link to="/doniesienia">Doniesienia</Link>
              </li>
              {/* <li className="icon">
                <FiSearch className="HeaderIcon" />
                <BiNetworkChart className="HeaderIcon" />
                <Gi3DGlasses className="HeaderIcon" />
              </li> */}
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <GrClose /> : <GrMenu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
