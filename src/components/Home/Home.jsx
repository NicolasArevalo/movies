import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate }  from 'react-router-dom'


import CarouselMovies from '../CarouselMovies/CarouselMovies'
import Navbar from '../Navbar/Navbar'

import './Home.scss';


export const Home = () => {

  const [query, setQuery] = useState('police');


  const handleQuery = ({ target }) => {
    setQuery(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

/*   const userDetails = localStorage.getItem('userDetails')
  
  userDetails == null ? redirect */

  return (/*  */
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='all_wrapper'>

          <section id="home" className='all_home section'>

            <div className='home_wrapper'>

              <div className="home_top">
                <h2>MOVIES</h2>
                <p>Choose your favorites...</p>
              </div>

              <form className="home_input" onSubmit={handleSubmit}>
                <label htmlFor="input"> Or search it:</label>
                <input type="text" name="query" id="query" value={query} onChange={handleQuery} autoComplete="off" />
                <button className='home_btn'><a href="#favs">Search</a></button>
              </form>

            </div>
          </section>

          <section id="favs" className='all_favorites section'>
            <div className="fav_wrapper">
              <h4 className='fav_title'>RESULTS FOR {query.toUpperCase()}</h4>
              <CarouselMovies query={query} />
            </div>
          </section>

          <hr />

          <section id="movies" className='all_movies section'>
            <div className="fav_wrapper">
              <h4 className='fav_title'>ALL MOVIES</h4>
              {/* <CarouselMovies /> */}

              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
