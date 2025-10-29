import React, { useState } from 'react';
import Data from "../movieData/Movies.json";
import MovieCart from "../MovieCart/MovieCart";

const Recommended = () => {
    let [MovieData, setMoviesData] = useState(Data);
    let [selectMovie, setSelectMovie] = useState("All");

    const filterMovies = selectMovie === "All" ? MovieData : MovieData.filter(movie => movie.category === selectMovie);
    const Categories = ["All", 'Bollywood', 'Tollywood', 'Mollywood', 'Hollywood'];
    return (
        <div className='container mx-auto'>
            <div className='space-y-4 pt-10 pb-10'>
                <div className=''>
                    <p className='text-white font-bold text-2xl'>Recommended For You</p>
                </div>
                <div className='flex flex-wrap gap-4 mb-8 '>
                    {Categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectMovie(cat)}
                            className={` px-4 py-2 rounded-3xl text-lg border border-amber-300 text-white 
                         ${selectMovie === cat ? "bg-amber-400 text-black" : "hover:bg-amber-400"}`}
                         >
                            {cat}
                        </button>
                    ))}
                </div>


                    {/* FINAL CODE FOR SHOW THE CART OR MOVIES RESULT */}


                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterMovies.map((movie) => (
                        <MovieCart key={movie.id} CartData={movie} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Recommended;






// import React, { useState } from 'react';
// import Data from "../movieData/Movies.json";
// import MovieCart from "../MovieCart/MovieCart";

// const Recommended = () => {
//   // 🎬 State variables
//   const [movieData] = useState(Data);
//   const [selectedMovie, setSelectedMovie] = useState("All");

//   // 🔍 Filter করা মুভি
//   const filteredMovies =
//     selectedMovie === "All"
//       ? movieData
//       : movieData.filter((movie) => movie.category === selectedMovie);

//   // 📋 ক্যাটাগরি লিস্ট
//   const categories = ["All", "Bollywood", "Tollywood", "Mollywood", "Hollywood"];

//   return (
//     <div className="container mx-auto">
//       <div className="space-y-4 pt-10 pb-10">
//         <p className="text-white font-bold text-2xl">Recommended For You</p>

//         {/* 🎯 Category Buttons */}
//         <div className="flex flex-wrap gap-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedMovie(cat)} // ✅ সঠিকভাবে সেট করা
//               className={`h-[40px] px-4 rounded-3xl text-xl flex justify-center items-center border border-amber-300 text-white
//                 ${
//                   selectedMovie === cat
//                     ? "bg-amber-400 text-black"
//                     : "hover:bg-amber-400"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🎬 Movie Card List */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredMovies.map((movie) => (
//           <MovieCart key={movie.id} CartData={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recommended;







// import React, { useState } from 'react';
// import Data from "../movieData/Movies.json";
// import MovieCart from '../MovieCart/MovieCart';

// const Recommended = () => {
//   const [MovieData] = useState(Data);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredMovies = selectedCategory === "All"
//     ? MovieData
//     : MovieData.filter(movie => movie.category === selectedCategory);

//   return (
//     <div className='container mx-auto'>
//       <div className='space-y-4 pt-10 pb-10'>
//         <p className='text-white font-bold text-2xl'>Recommended For You</p>
//         <div className='flex space-x-2 flex-wrap'>
//           {["All", "Bollywood", "Tollywood", "Mollywood", "Hollywood"].map(category => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className='h-[40px] px-4 border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
//         {filteredMovies.map(movie => (
//           <MovieCart key={movie.id} CartData={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recommended;