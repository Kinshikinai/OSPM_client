import './Login.css';
import axios from '../axios.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
    const nav = useNavigate();
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');
    const [loginwarn, setloginwarn] = useState('');
    const [passwordwarn, setpasswordwarn] = useState('');
    async function loggingin() {
        setloginwarn('');
        setpasswordwarn('');
        if (login === '') {
            setloginwarn('Please enter your login');
            return;
        }
        if(password === ''){
            setpasswordwarn('Please enter your password');
            return;
        }
        await axios.post('/login', {
            role: document.getElementById('creator').checked ? 1 : 0,
            login: login,
            password: password
        })
        .then(async result => {
            if (result.data.success) {
                window.localStorage.setItem('token', result.data.token);
                nav('/land');
            }
        })
        .catch(err => {
            setloginwarn(err.response.data.message);
        })
    }
    return (
        <div className="login">
            <div className="loginform">
                <h1>Login</h1>
                <div className="rolechoose">
                    <input type="radio" name="role" id="creator"/>
                    <label htmlFor="creator">Creator</label>
                    <input type="radio" name="role" id="member"/>
                    <label htmlFor="member">Member</label>
                </div>
                <div className="wrapper">
                    <div className="inpwarn">
                        <input onChange={event=>(setlogin(event.target.value))} value={login} type="text" name="login" placeholder="login"/>
                        <p className="warn">{loginwarn}</p>
                    </div>
                    <div className="inpwarn">
                        <input onChange={event=>(setpassword(event.target.value))} value={password} type="password" name="password" placeholder="password"/>
                        <p className="warn">{passwordwarn}</p>
                    </div>
                </div>
                <button onClick={loggingin}>Log In</button>
                <Link to='/reg' style={{color: 'white', margin: 'auto'}}>Don't have an account? Register!</Link>
            </div>
        </div>
    );
};