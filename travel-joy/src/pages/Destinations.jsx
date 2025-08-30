import React from "react";

function Destinations() {
  const destinations = [
    { name: "Tokyo, Japan", img: "/images/destination_1.avif", link: "https://www.tripadvisor.com/Attraction_Products-g298184-a_contentId.1184174385073099+268450130-Tokyo_Tokyo_Prefecture_Kanto.html" },
    { name: "Paris, France", img: "/images/destination_2.jpg", link: "https://www.tripadvisor.com/Attraction_Products-g187147-a_contentId.1185273896368620+268449600-Paris_Ile_de_France.html" },
    { name: "Cape Town, South Africa", img: "/images/destination_3.jpg", link: "https://www.tripadvisor.com/Attraction_Products-g1722390-a_contentId.1176477804242260+268450071-Cape_Town_Western_Cape.html" }
  ];

  return (
    <div className="page">
      <h2 className="centered">Destinations</h2>
      <div className="rec-examples">
        {destinations.map((dest, i) => (
          <div key={i} className="destination-card card">
            <img src={dest.img} alt={dest.name} />
            <h2>{dest.name}</h2>
            <a href={dest.link} target="_blank" rel="noopener noreferrer">More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;