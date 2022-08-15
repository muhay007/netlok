import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/results" element={<SearchPage />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
