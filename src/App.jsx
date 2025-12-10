import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventDetailPage from "./components/EventDetailPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/event/:id" element={<EventDetailPage />} />
              <Route
                path="*"
                element={
                  <div className="text-center py-20 text-2xl">
                    Page Not Found
                  </div>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

// const [results, setResults] = useState([]);

{
  /* <div className=" top-0 w-full ">
            <Header />
          </div> */
}
{
  /* <div className="w-full">
            <Hero />
          </div> */
}
{
  /* <div className="w-full">
            <SearchResult setResults={setResults} results={results} />
          </div> */
}
//  <div className="mt-24 bottom-0 w-full">
//             <Footer />
//           </div>
