import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="headerParent" id="header">
      <h1 id="header-text> AJ Javadi</h1>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
