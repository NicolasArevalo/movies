import React from 'react';
import CarouselMovies from '../CarouselMovies/CarouselMovies';

import './Movies.scss';


const Movies = () =>{

    const {action, animation, horror, romance, sfiction} = {
        action: 28,
        animation: 16,
        horror: 27,
        romance: 10749,
        sfiction: 878
    }

    /* alert(`${action} - ${animation} - ${horror} - ${romance} - ${sfiction}`) */


    return(
        <>
        <h1 className='title_allmovies'>All movies</h1>
        <div className="action">
            <h4>Action</h4>
            <CarouselMovies query={action} />
        </div>
        <div className="Animation">
            <h4>Animation</h4>
            <CarouselMovies query={animation} />
        </div>
        <div className="Horror">
            <h4>Horror</h4>
            <CarouselMovies query={horror} />
        </div>
        <div className="Romance">
            <h4>Romance</h4>
            <CarouselMovies query={romance} />
        </div>
        <div className="Science fiction">
            <h4>Science fiction</h4>
            <CarouselMovies query={sfiction} />
        </div>
        
        <br /><br /><br /><br /><br /><br />
        </>
    )
} 

export default Movies;