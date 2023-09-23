import React from "react";
import "./Searchlist.css";

export const Searchlist = ({ filterData }) => {
  return (
    <div className="search-list-container">
      {filterData.map((data) => (
        <div className="search-items" key={data.id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
          <p className="title">{data.title || data.name}</p>
        </div>
      ))}
    </div>
  );
};
