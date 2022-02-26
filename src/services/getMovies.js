
export const getMovies = async ( query ) => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=5fc6392b376695613a6a3ebe0134f71d&query=${encodeURI( query )}`
    const res = await fetch( endpoint )
    const {results} = await res.json()
    
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

    return movies
}

export const getMoviesByGenre = async ( query ) => {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=5fc6392b376695613a6a3ebe0134f71d&language=en-US&with_genres=${encodeURI( query )}`
    const res = await fetch( endpoint )
    const { results } = await res.json()
    
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

    return movies
}