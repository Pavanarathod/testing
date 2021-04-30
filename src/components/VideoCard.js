import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function VideoCard({ movie }) {
  return (
    <div className="VideoCard">
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        element="p"
        line={1}
        truncateText="...."
        text={movie.overview}
      />

      <h2>{movie.title}</h2>
      <p>Ratings: {movie.vote_average}</p>
    </div>
  );
}

export default VideoCard;
