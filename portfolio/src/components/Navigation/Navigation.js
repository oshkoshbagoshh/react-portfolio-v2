import React from "react";
import "./Navigation.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTab from "@mui/base/useTab";


//  Set up an Array with our pages
const pages = ["About", "Portfolio", "Contact", "Resume"];

// Set up our TabPanel
function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <ul
      className="nav nav-tabs"
      style={{ paddingRight: "55px", paddingTop: "30px" }}
    >
      <li className="nav-item">
        <a
          id="nav-link"
          href="#about"
          onClick={() => setCurrentPage("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#portfolio"
          onClick={() => setCurrentPage("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#Contact"
          onClick={() => setCurrentPage("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#resume"
          onClick={() => setCurrentPage("Resume")} // if the current page
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          // is equal to the page we are on, then we want to set the class to active, otherwise, we want to set it to nav-link
          >
          Resume

        </a>
      </li>
    </ul>
  );
}

export default Navigation;
