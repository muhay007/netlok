import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Movies({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-screen-lg mx-auto mb-12">
      <h2 className="text-white font-bold md:text-4xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((index, key) => (
            <div
              className=" w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] inline-block cursor-pointer relative p-2"
              key={key}
            >
              <Link to={`/details/${key}`} state={{ data: index }}>
                <img
                  className="w-full h-auto block rounded-lg group hover:scale-105 ease-linear duration-200 hover:brightness-50"
                  src={`https://image.tmdb.org/t/p/w500/${index?.backdrop_path}`}
                  alt={index?.title}
                />
              </Link>
              <p className="white-space-normal text-white text-xs md:text-sm font-bold text-center py-2">
                {index?.title}
              </p>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
}

export default Movies;
