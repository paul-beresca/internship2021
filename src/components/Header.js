import React from "react";
import logo from "./logo/apple.svg"; // with import
import searchLogo from "./logo/search.png";
import "./App.css";

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-logo">
        <img src={logo} alt="" srcset="" />{" "}
      </div>
      <div className="navbar">
        <div>
          <a href="#">Home</a>
          <a href="/about-us">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="searchbar">
        <form>
          <input type="text" placeholder="Search website" />
          <img src={searchLogo}></img>
        </form>
      </div>
    </div>
  );
};

export default Header;
