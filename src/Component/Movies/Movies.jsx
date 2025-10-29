import React, { useState } from 'react';
import MovieData from "../movieData/Movies.json";
import MovieCart from '../MovieCart/MovieCart';
import Header from '../Header/Header';
import Sliders from '../Sliders/Sliders';
import Recommended from '../Recommended/Recommended';
const Movies = () => {
    const AllMovieData = MovieData.slice(0,1);
    const [movies, setMovies] = useState(MovieData);
    
    
    return (
        <div className='bg-black h-full w-full '>
            <Header></Header>
            {/* <Sliders></Sliders> */}
            <Recommended></Recommended>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10  container mx-auto'>
                {
                    movies.map(p =>
                        <MovieCart CartData ={p}></MovieCart>
                    )
                }
            </div>
        </div>
    );
};

export default Movies;