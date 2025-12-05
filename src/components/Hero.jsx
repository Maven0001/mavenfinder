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
      <div className="w-full py-8 px-4 md:px-10 lg:px-20 ">
        <div className="flex flex-col items-center w-full  justify-center bg-[url('/images/hero-img.png')] bg-cover bg-no-repeat bg-center md:h-[500px] rounded-3xl ">
          <h1 className="text-white font-bold mt-7 text-4xl text-center md:text-8xl md:text-center  md:w-[800px]">
            Find events you'll love here
          </h1>
          <div className="flex  items-center gap-1 mt-10 mb-10  md:gap-4 md:mt-16">
            <div className="flex gap-1 md:gap-3 bg-white w-[230px] h-10 p-4 rounded-2xl md:w-[642px] md:h-[60px] md:p-6 items-center md:rounded-3xl">
              <FaSearch className="h-10 w-10 md:h-6 md:w-6 text-gray-800" />
              <input
                className="w-xl md:w-[642px] md:h-[60px] outline-none placeholder:text-[12px] md:placeholder:text-xl "
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search events using location....."
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-sm w-[70px] h-10 rounded-2xl  md:text-2xl md:w-[140px]  md:h-[60px] md:p-3 md:rounded-3xl "
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
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
