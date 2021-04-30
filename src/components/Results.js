import { MovieSharp } from "@material-ui/icons";
import axios from "./axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import requests from "./requests";

function Results({ selectedOptions }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOptions);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOptions]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
