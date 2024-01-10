import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      // Pass the same listener function to removeEventListener
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="netflix_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
