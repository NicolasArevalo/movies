import React, { useState } from 'react'
import { useNavigate }  from 'react-router-dom'

import './Login.scss';

const users = {
    usernameU: 'Pablito',
    passwordU: 123
}

export const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDetails = {
            username: username,
            password: password
        }
/*
        const {usernameU, passwordU} = users;

         Object.entries(userDetails).forEach(([key, value]) => {
            alert(key)
            if ( key == 'username' ){
                value === usernameU ? alert('es crrepto') : alert('noks we')
            } else if( key === 'password' ) {
                value === passwordU ? alert('pass corrupta') : alert ('contra nada too')
            } else {
                alert('wtf we')
            }
          });
 */

        localStorage.setItem('userDetails', JSON.stringify(userDetails))
        alert(`Hola, ${username}, bienvenido.`)
        
        navigate('/');
    }

    return (
        <div className="login">
            <div className='login-wrapper'>
                <h1>Movies</h1>
                <form onSubmit={handleSubmit} className='login_form'>
                    <input
                        type="text" name='username' 
                        onChange={ ({ target }) => setUsername(target.value)} />

                    <input
                        type="password"
                        onChange={({ target }) => setPassword(target.value)} />

                    <button>Get in</button>
                </form>

            </div>
        </div>

    )
}
