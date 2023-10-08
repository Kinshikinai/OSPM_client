import './Nav.css';
import { useNavigate } from 'react-router-dom';

export function Nav() {
    const nav = useNavigate();
    return (
        <div className="nav">
            <div className="icon">
                <img onClick={event => (nav('/land'))} src="/img/icon.png" alt="" />
            </div>
            <div className="navs">
                <p onClick={event => (nav('/projects'))}>Projects</p>
                <img onClick={event => (nav('/create'))} src="/img/add.png" alt="" />
                <img src="/img/user.png" alt="" />
            </div>
        </div>
    );
};