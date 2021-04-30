import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setSelectedOptions }) {
  return (
    <div className="nav">
      <h2>Trending</h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchTopRated)}>
        TopRated
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchActionMovies)}>
        Aaction
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchMystrey)}>Mystrey</h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOptions(requests.fetchTv)}>MovieTv</h2>
    </div>
  );
}

export default Nav;
