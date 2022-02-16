import React, { useState, useEffect } from 'react'
import './ModalMovie.scss';


import HeartBlue from '../../assets/heart-dark.svg';
import close from '../../assets/xmark-solid.svg';

const ModalMovie = ({ img, title, releaseDate, votes, language, description, getCerrar }) => {

    const handleCierre = () =>{
        getCerrar(false)
    }


    return (
        <div className='modal_wrapper'>
            <div className="modal_bg" onClick={ handleCierre }>

            </div>
            <div className="modal_card">
                <img src={close} alt="" className='icon' onClick={ handleCierre } />
                <img src={img} alt="" className='modal_img' />
                <div className="modal_body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <label>Relase date: {releaseDate}</label>
                    <label>Language: {language}</label>

                    <div className="modal_votes">
                        <label >{votes}</label>
                    </div>

                    <div className="modal_fav">
                        <img src={HeartBlue} alt="" className='heart' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMovie
