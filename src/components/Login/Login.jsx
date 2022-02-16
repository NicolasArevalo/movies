import React, { useState } from 'react'
import { useNavigate }  from 'react-router-dom';

import './Login.scss';



export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hola, ${username}, bienvenido.`);
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
