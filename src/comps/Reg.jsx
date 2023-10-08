import './Reg.css';
import axios from '../axios.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Reg() {
    const nav = useNavigate();
    const [fname, setfname] = useState('');
    const [sname, setsname] = useState('');
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [fnamewarn, setfnamewarn] = useState('');
    const [snamewarn, setsnamewarn] = useState('');
    const [loginwarn, setloginwarn] = useState('');
    const [passwordwarn, setpasswordwarn] = useState('');
    const [phonewarn, setphonewarn] = useState('');
    const [emailwarn, setemailwarn] = useState('');
    async function reg() {
        setfnamewarn('');
        setsnamewarn('');
        setloginwarn('');
        setpasswordwarn('');
        setphonewarn('');
        setemailwarn('');
        if (fname === '') {
            setfnamewarn('Enter your first name');
            return;
        }
        if (sname === '') {
            setsnamewarn('Enter your second name');
            return;
        }
        if (login === '') {
            setloginwarn('login is required');
            return;
        }
        if (password === '') {
            setpasswordwarn('password is required');
            return;
        }
        if (phone === '') {
            setphonewarn('phone is required');
            return;
        }
        if (email === '') {
            setemailwarn('email is required');
            return;
        }
        await axios.post('/reg', {
            role: document.getElementById('creator').checked ? 1 : 0,
            login: login,
            password: password,
            fname: fname,
            sname: sname,
            phone: phone,
            email: email
        })
        .then(async result => {
            if(result.data.success) {
                nav('/login');
            }
        })
        .catch(err => {
            if (!err.response.data.success) {
                setloginwarn(err.response.data.message);
                setphonewarn(err.response.data.message);
                setemailwarn(err.response.data.message);
            }
            if (err.response.data[0]?.path) {
                Array.from(err.response.data).forEach(warn => {
                    if (warn.path === 'password') {
                        setpasswordwarn(warn.msg);
                    }
                    if (warn.path === 'login') {
                        setloginwarn(warn.msg);
                    }
                    if (warn.path === 'email') {
                        setemailwarn(warn.msg);
                    }
                    if (warn.path === 'phone') {
                        setphonewarn(warn.msg);
                    }
                })
            }
        });
    }
    return (
        <div className="reg">
            <div className="regform">
                <h1>Registration</h1>
                <div className="rolechoose">
                    <input type="radio" checked name="role" id="creator"/>
                    <label htmlFor="creator">Creator</label>
                    <input type="radio" name="role" id="member"/>
                    <label htmlFor="member">Member</label>
                </div>
                <div className="wrapper">
                    <div className="col">
                        <div className="inpwarn">
                            <input onChange={event => (setfname(event.target.value))} value={fname} type="text" name="fname" placeholder="first name"/>
                            <p className="warn">{fnamewarn}</p>
                        </div>
                        <div className="inpwarn">
                            <input onChange={event => (setsname(event.target.value))} value={sname} type="text" name="sname" placeholder="second name"/>
                            <p className="warn">{snamewarn}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inpwarn">
                            <input onChange={event => (setlogin(event.target.value))} value={login} type="text" name="login" placeholder="login"/>
                            <p className="warn">{loginwarn}</p>
                        </div>
                        <div className="inpwarn">
                            <input onChange={event => (setpassword(event.target.value))} value={password} type="password" name="password" placeholder="password"/>
                            <p className="warn">{passwordwarn}</p>
                        </div>
                        <div className="inpwarn">
                            <input onChange={event => (setphone(event.target.value))} value={phone} type="tel" name="phone" placeholder="phone"/>
                            <p className="warn">{phonewarn}</p>
                        </div>
                        <div className="inpwarn">
                            <input onChange={event => (setemail(event.target.value))} value={email} type="email" name="email" placeholder="email"/>
                            <p className="warn">{emailwarn}</p>
                        </div>
                    </div>
                </div>
                <button onClick={reg}>Sign In</button>
                <Link to='/login' style={{color: 'white', margin: 'auto'}}>Have an account? Log in!</Link>
            </div>
        </div>
    );
};