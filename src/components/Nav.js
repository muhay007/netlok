import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between py-4 px-6 fixed top-0 z-30 w-full text-white">
        <Link to={"/"}>
          <h1 className="text-4xl font-bold italic">
            <span className="text-red-700">NET</span>LOK
          </h1>
        </Link>
        <div className="flex items-center ">
          <input
            type="text"
            id="searchID"
            className="bg-[#333333] py-2 px-4 rounded-2xl"
            aria-label="search"
            name="query"
            value={query}
            onChange={changeHandler}
          />
          <button
            className="block text-sm font-bold px-4 py-2 hover:bg-gray-700 rounded-sm mx-4 bg-gray-800"
            type="submit"
            onClick={() => navigate("/results", { state: { query: query } })}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
