import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img
          src="https://uploads-ssl.webflow.com/60d5a97381523ace9d3c87bb/635c2962030b63121e5651ff_raftlabs.png"
          alt="logo"
        ></img>
        <h1>RaftLabs</h1>
      </div>
      <button>Github</button>
    </div>
  );
};

export default Navbar;
