import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className=" top-0 w-full ">
        <Header />
      </div>
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full">
        <SearchResult setResults={setResults} results={results} />
      </div>

      <div className="mt-24 bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
