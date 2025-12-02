import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header />
      <Hero />
      <SearchResult setResults={setResults} results={results} />
    </>
  );
}

export default App;
