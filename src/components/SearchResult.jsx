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
        <>
          <h1 className="mt-[50px] ml-16 font-bold text-3xl">
            Search results for events in {input}
          </h1>
          <div className="mt-5 mr-16 ml-16 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto h-auto ">
            {results.map((result) => (
              <div key={result.id}>
                {result.images?.[0]?.url && (
                  <img
                    className="w-[425px] h-[255px] rounded-2xl "
                    src={result.images[0].url}
                    alt={result.name}
                  />
                )}

                <h3 className="font-medium text-2xl">{result.name}</h3>

                <div className="flex justify-between mt-2 items-end ">
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
                    className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-[16px] w-auto h-10 rounded-xl "
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
        </>
      )}
    </div>
  );
};

export default SearchResult;
