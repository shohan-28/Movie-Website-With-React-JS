import React, { useState } from 'react';
import Data from "../movieData/Movies.json";
import MovieCart from "../MovieCart/MovieCart";

const Recommended = () => {
  const [MovieData] = useState(Data);
  const [selectMovie, setSelectMovie] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filterMovies =
    selectMovie === "All"
      ? MovieData
      : MovieData.filter(movie => movie.category === selectMovie);

  const visibleMovies = showAll ? filterMovies : filterMovies.slice(0, 12);

  const Categories = ["All", "Bollywood", "Tollywood", "Mollywood", "Hollywood"];

  return (
    <>
      <div className="container mx-auto">
        <div className="space-y-4 pt-10 pb-10">
          <p className="text-white font-bold text-2xl">Recommended For You</p>

          <div className="flex flex-wrap gap-4 mb-10">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectMovie(cat);
                  setShowAll(false); // reset on category change
                }}
                className={`px-4 py-2 rounded-3xl text-lg border border-amber-300 text-white 
                  ${selectMovie === cat ? "bg-amber-400 text-black" : "hover:bg-amber-400"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleMovies.map((movie) => (
              <MovieCart key={movie.id} CartData={movie} />
            ))}
          </div>
        </div>
      </div>

      {filterMovies.length > 12 && (
        <div className="mt-6 flex justify-center pb-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-200 cursor-pointer transition "
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default Recommended;