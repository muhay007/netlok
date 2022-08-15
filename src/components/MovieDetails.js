import "./SearchPage";
import "./Movies";
import requests from "../Requests";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

function Mount() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const [trailer, setTrailer] = useState();
  const fetchUrl1 = requests.requestTrailer1;
  const fetchUrl2 = requests.requestTrailer2;

  useEffect(() => {
    const movieTrailer = async () => {
      try {
        const res = await axios.get(fetchUrl1 + data?.id + fetchUrl2);

        const trailer = res.data?.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        const key = trailer.key;
        setTrailer(key);
      } catch (err) {
        console.log(err);
      }
    };
    movieTrailer();
  }, [fetchUrl1, data?.id, fetchUrl2]);

  return (
    <div className="flex items-center flex-col mt-44 text-white max-w-screen-lg mx-auto">
      <button
        onClick={() => navigate(-1)}
        className=" text-sm px-4 py-2 rounded-sm bg-gray-800 hover:bg-gray-700"
      >
        Go Back
      </button>
      <div className="flex flex-wrap p-8 gap-8 ">
        <div className="flex-1 md:basis-[45%] basis-full relative">
          <img
            className="rounded-2xl w-full md:w-auto"
            src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
            alt={data?.title}
            onError={(e) => (e.target.style.display = "none")}
          />
          <iframe
            className="rounded-2xl absolute top-0 left-0 w-full h-full duration-200 ease-linear opacity-0 hover:opacity-100"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allow="encrypted-media"
            title="video"
            allowFullScreen
          />
          <p className="absolute  text-center w-full text-xs py-2">
            HOVER POSTER TO WATCH THE TRAILER!
          </p>
        </div>
        <div className="flex-1 basis-[45%] overflow-auto">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          <div className="flex gap-2 py-2 items-center">
            <span className="text-violet-500">{data?.vote_average}</span>
            <span className="bg-yellow-500 text-black text-sm font-black px-2 rounded-md">
              IMDb
            </span>
            <p>{data?.original_language}</p>
            <p>{data?.release_date}</p>
          </div>

          <p className="text-left text-md text-white/40 pt-8">
            {data?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mount;
