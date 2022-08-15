import "./Nav";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import requests from "../Requests";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = location.state.query;
  const fetchURL = requests.requestSearch;

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const res = await axios.get(fetchURL + query);

        setMovies(res.data?.results);
      } catch (err) {
        console.log(err);
      }
    };
    searchMovie();
  }, [fetchURL, query]);

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-44">
          <h1 className="text-4xl text-white font-bold text-center my-4">
            Results of <span className="text-indigo-600">{query}</span>
          </h1>
          <div className="md:columns-3 col-2 w-full gap-4 md:space-y-4 space-y-8 md:p-4 p-12">
            {movies?.map((index, key) => (
              <div className="break-inside-avoid" key={key}>
                <Link to={`/details/${key}`} state={{ data: index }}>
                  <img
                    className="rounded-2xl hover:brightness-50 hover:scale-105 ease-linear duration-200 md:w-auto w-full"
                    src={`https://image.tmdb.org/t/p/w500/${index?.backdrop_path}`}
                    alt={index?.title}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
