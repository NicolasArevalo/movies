import React, { useEffect, useState } from 'react'
import { getMovies, getMoviesByGenre } from '../../services/getMovies'
import './CarouselMovies.scss'

import MovieCard from './MovieCard'

const CarouselMovies = ({ query }) => {

    const [ Info, setInfo] = useState([])

    useEffect(()=>{
      
      switch (query) {
        case 28:
          getMoviesByGenre( query ).then( setInfo )
          break;
        case 16:
          getMoviesByGenre( query ).then( setInfo )
          break;
        case 27:
          getMoviesByGenre( query ).then( setInfo )
          break;
        case 10749:
          getMoviesByGenre( query ).then( setInfo )
          break;
        case 878:
          getMoviesByGenre( query ).then( setInfo )
          break;
    
      
        default:
          getMovies( query ).then( setInfo )
          break;
      }
        
    }, [query])    


  return (
    <div className='carousel_wrapper'>

        { Info.map( e => {

            return <MovieCard key={ e.id } id={e.id} 
                            title={e.title}
                            img={ e.img.substr(-4) == 'null' ? 'https://via.placeholder.com/250x150?text=No+image': e.img} 
                            language={e.language}
                            description={e.description} 
                            releaseDate={e.rDate}
                            votes={e.vote}      />
        } ) }
        
    </div>
    
  )
}

export default CarouselMovies
