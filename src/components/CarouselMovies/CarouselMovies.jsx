import React, { useEffect, useState } from 'react'
import './CarouselMovies.scss'

import MovieCard from './MovieCard'

const CarouselMovies = () => {

    const [theInfo, settheInfo] = useState([])

    useEffect(()=>{
        getMovies()
    }, [])

    const getMovies = async () => {
        const endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=5fc6392b376695613a6a3ebe0134f71d&query=jack'
        const res = await fetch( endpoint )
        const {results} = await res.json()
        console.log('pollo',results)
        const movies = results.map( info => {           

            return {
                id: info.id,
                title: info.title,
                vote: info.vote_average,
                description: info.overview,
                img: 'https://image.tmdb.org/t/p/w500'+info.backdrop_path,
                language: info.original_language.toUpperCase(),
                rDate: info.release_date,
            }
        })
        settheInfo( movies );
    }    


  return (
    <div className='carousel_wrapper'>

        { theInfo.map( e => {
            /* info.backdrop_path === 'null' ? 
            info.backdrop_path = 'https://via.placeholder.com/250x150': info.backdrop_path = info.backdrop_path; */
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
