import React from "react";
import { useState } from "react";

const SearchResult = ({ results, error, loading, input }) => {
  return (
    <div>
      {loading && (
        <p className="text-center text-gray-600">Loading Events in {input}</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* {!loading && !error && results.length === 0 && input && (
        <p className="text-center text-gray-500">No events found for {input}</p>
      )} */}

      {!loading && results.length > 0 && (
        <div className=" px-4 md:px-10 lg:px-20">
          <h1 className="text-xl font-medium md:text-3xl">
            Search results for events in{" "}
            <span className="text-indigo-500">{input}</span>
          </h1>
          <div className="mt-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {results.map((result) => (
              <div key={result.id} className="w-fit">
                {result.images?.[0]?.url && (
                  <img
                    className="w-[425px] h-[255px] rounded-2xl "
                    src={result.images[0].url}
                    alt={result.name}
                  />
                )}

                <h3 className="font-medium text-xl">{result.name}</h3>

                <div className="flex justify-between mt-2 ">
                  <div>
                    {result.dates?.start?.localDate && (
                      <p className="font-normal text-sm ">
                        {new Date(
                          result.dates.start.localDate
                        ).toLocaleDateString()}
                      </p>
                    )}

                    {result._embedded?.venues?.[0]?.name && (
                      <p className="font-medium text-sm mt-1 ">
                        {result._embedded.venues[0].name}
                      </p>
                    )}
                  </div>
                  <a
                    className="px-8 py-2 border-2 border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-black transition-colors duration-300 "
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
