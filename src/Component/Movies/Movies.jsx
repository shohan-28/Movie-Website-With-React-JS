import React, { useState } from 'react';
import MovieData from "../movieData/Movies.json";
import MovieCart from '../MovieCart/MovieCart';
import Header from '../Header/Header';
import Sliders from '../Sliders/Sliders';
import Recommended from '../Recommended/Recommended';
import Footer from '../Footer/Footer';
const Movies = () => {
    // let AllMovieData = MovieData.slice(0,12);
    const [movies, setMovies] = useState(MovieData);
    




    return (
        <div className='bg-black h-full w-full '>
            <Header></Header>
            <Sliders></Sliders>
            {/* <div>
               { movies.map (p => <Recommended DataMovie = {p}></Recommended>)}
                
            </div> */}

            <Recommended></Recommended>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10  container mx-auto'>
                {/* {
                    movies.map(p =>
                        <MovieCart CartData ={p}></MovieCart>
                    )
                } */}


                {/* {
                    movies.map(p => <MovieCart CartData={p}></MovieCart>)
                } */}

            </div>



            {/* Recommended.jsx component already filtering, 12 ta movie card dekhano, ebong "Show More / Show Less" logic handle kore. Tai Movies.jsx e tumi duita option pabe: ekta holo sudhu <Recommended /> use kora, arekta holo alada toggle logic diye full movie list dekhano. UI clean r duplicate avoid korte, sudhu Recommended.jsx file e use kora best hobe.
 */}


            <Footer></Footer>
        </div>
    );
};

export default Movies;