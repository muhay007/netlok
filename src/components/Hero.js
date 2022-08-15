import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  //   const truncateString = (str, num) => {
  //     if (str?.length > num) {
  //       return str.slice(0, num) + "...";
  //     } else {
  //       return str;
  //     }
  //   };

  return (
    <div className="max-w-screen-xl h-[500px] text-white mx-auto mb-16">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover filter brightness-50 rounded-b-2xl"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <h1 className="absolute bottom-10 left-5 text-3xl md:text-5xl font-bold">
          {movie?.title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
