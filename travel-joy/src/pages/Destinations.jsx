import React, { useState } from "react";

function Destinations() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const destinations = [
    {
      name: "Tokyo, Japan",
      img: "/images/destination_1.avif",
      link: "https://www.tripadvisor.com/Attraction_Products-g298184-a_contentId.1184174385073099+268450130-Tokyo_Tokyo_Prefecture_Kanto.html",
    },
    {
      name: "Paris, France",
      img: "/images/destination_2.jpg",
      link: "https://www.tripadvisor.com/Attraction_Products-g187147-a_contentId.1185273896368620+268449600-Paris_Ile_de_France.html",
    },
    {
      name: "Cape Town, South Africa",
      img: "/images/destination_3.jpg",
      link: "https://www.tripadvisor.com/Attraction_Products-g1722390-a_contentId.1176477804242260+268450071-Cape_Town_Western_Cape.html",
    },
  ];

  const searchLocations = async () => {
    if (!query) return;

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3046a0b00mshc17ab835d0bcae2p152c09jsndd9b26346ddf",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  return (
    <div className="page">
      <h2 className="centered">Destinations</h2>

      {}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a destination..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchLocations}>Search</button>
      </div>

      {}
      <div className="rec-examples">
        {results.map((city, i) => (
          <div key={i} className="destination-card card">
            <h3>{city.city}, {city.country}</h3>
            <p>Population: {city.population.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {}
      <h3 className="centered">Popular Picks</h3>
      <div className="rec-examples">
        {destinations.map((dest, i) => (
          <div key={i} className="destination-card card">
            <img src={dest.img} alt={dest.name} />
            <h2>{dest.name}</h2>
            <a href={dest.link} target="_blank" rel="noopener noreferrer">
              More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;