import React, {useState} from 'react'
import './MovieCard.scss'

import HeartBlue from '../../assets/heart-dark.svg';
/* import HeartRed from '../../assets/heart.svg'; */
import ModalMovie from './ModalMovie';

const MovieCard = ({ id, title, description, language, votes, img, releaseDate }) => {

    const [modalOpened, setModalOpened] = useState(false);
    const [cerrar, setCerrar] = useState(null);

    const openModal = () => {
        setModalOpened( !modalOpened )
    }


    const getCerrar = (cerrar) => {
        setCerrar(cerrar);
        !cerrar ? setModalOpened(!modalOpened) : setModalOpened(modalOpened)
      }

    return (
        <div className='card_wrapper' >

            { modalOpened && <ModalMovie title={title}
                            img={ img } 
                            language={language}
                            description={description} 
                            releaseDate={releaseDate}
                            votes={votes}  getCerrar={getCerrar} /> }

            <img src={img} alt="" className='card_img' onClick={ openModal }/>
            <div className="card_body" onClick={ openModal }>
                <h4>{title}</h4>
                <p>Relase date: {releaseDate}</p>

                <div className="card_votes">
                    <label>{Number.isInteger(votes) ? `${votes}.0` : votes}</label>
                </div>

                <div className="card_fav">
                    <img src={HeartBlue} alt="" className='heart' />
                </div>
            </div>

        </div>
    )
}

export default MovieCard;