import React from 'react'
import './MovieCard.scss'

import HeartBlue from '../../assets/heart-solid.svg';
import HeartRed from '../../assets/heart.svg';

const MovieCard = ({id ,title, description, language, votes, img, releaseDate}) => {
    const keyxD =  id
    
  return (
    <div className='card_wrapper'>


        <img src={img} alt="" className='card_img' />
        <div className="card_body">
            <h4>{title}</h4>
            {/* <p>{description}</p> */}
            {/* <label>Language: {language}</label> */}
            <p>Relase date: {releaseDate}</p>

            <div className="card_limit-age">
                <label>{votes}</label>
            </div>

            <div className="card_fav">
                <img src={HeartBlue} alt="" className='heart'/>
            </div>
        </div>

    </div>
  )
}

export default MovieCard;