import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";

const Hero = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (value) => {
    // if (!input.trim()) {
    //   alert("Please enter a search");
    //   return;
    // }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const apiKey = "tR1Xb0Oavp3PTBD0TllSA64TnkqHXGFq";
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(
          input
        )}&size=10&page=0&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Unable to generate result");
      }

      const json = await response.json();

      const events = json._embedded?.events || [];

      console.log("API Response:", json);

      setResults(events);
    } catch (err) {
      setError("Something went wrong. please try again");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setInput(input);
    if (input.trim()) {
      fetchData(value);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center bg-[url('/images/hero-img.png')] bg-cover bg-no-repeat bg-center h-[500px] mr-16 ml-16 mt-[57px] rounded-3xl">
        <h1 className="text-white font-bold text-8xl text-center  w-[800px]">
          Find events you'll love here
        </h1>
        <div className="flex gap-4 mt-16">
          <div className="flex gap-3 bg-white w-[642px] h-[60px] p-6 items-center rounded-3xl">
            <FaSearch className="h-6 w-6" />
            <input
              className="w-[642px] h-[60px] outline-none"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search events using location....."
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-2xl w-[140px]  h-[60px] p-3 rounded-3xl "
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
      <SearchResult
        results={results}
        error={error}
        input={input}
        loading={loading}
      />
    </>
  );
};

export default Hero;
