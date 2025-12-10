import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EventDetailPage = () => {
  const { id } = useParams(); // This gets the real event ID like "G5diZfkn0B-bh"
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEvent = async () => {
      try {
        const apiKey = "tR1Xb0Oavp3PTBD0TllSA64TnkqHXGFq";
        const realUrl = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apiKey}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(realUrl)}`;

        console.log("Fetching:", proxyUrl); // ← Check this in console!

        const res = await fetch(proxyUrl);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Event could not be loaded. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) getEvent();
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-2xl">Loading event...</div>;
  if (error)
    return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Link to="/" className="inline-block m-6 text-indigo-600 font-bold">
          ← Back
        </Link>

        <img
          src={event.images?.[0]?.url || "https://via.placeholder.com/1200x600"}
          alt={event.name}
          className="w-full h-96 object-cover"
        />

        <div className="p-10">
          <h1 className="text-5xl font-bold text-center mb-8">{event.name}</h1>

          <div className="text-center text-xl">
            <p className="font-bold text-indigo-600">
              {new Date(event.dates.start.localDate).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
            {event.dates.start.localTime && (
              <p>Time: {event.dates.start.localTime.slice(0, 5)}</p>
            )}
            <p className="mt-6 text-2xl font-semibold">
              {event._embedded?.venues?.[0]?.name}
            </p>
            <p className="text-gray-600">
              {event._embedded?.venues?.[0]?.city?.name},{" "}
              {event._embedded?.venues?.[0]?.state?.stateCode ||
                event._embedded?.venues?.[0]?.country?.name}
            </p>
          </div>

          <div className="text-center mt-12">
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-2xl px-16 py-6 rounded-full"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
