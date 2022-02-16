import React, { useEffect, useState } from 'react'
import { getMovies } from '../../services/getMovies'
import './CarouselMovies.scss'

import MovieCard from './MovieCard'

const CarouselMovies = ({ query }) => {

    const [ Info, setInfo] = useState([])

    useEffect(()=>{
        getMovies( query ).then( setInfo )
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
