import React from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";

// This component is the main container for the portfolio
// It will conditionally render the different pages based on the current page state
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
  return <Portfolio />;
}
