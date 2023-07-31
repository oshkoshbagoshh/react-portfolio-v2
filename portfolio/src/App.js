import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


// Create a function for the App that will render the Header, PortfolioContainer, and Footer components.
const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;
