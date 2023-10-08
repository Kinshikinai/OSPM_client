import { useEffect, useState } from 'react';
import axios from '../axios.js';
import './Create.css';
import { useNavigate } from 'react-router-dom';

export function Create() {
    const nav = useNavigate();
    const [skills, setskills] = useState([]);
    const [skillsch, setskillsch] = useState('');
    const [name, setname] = useState('');
    const [desc, setdesc] = useState('');
    useEffect(() => {
        axios.get('/skills')
        .then(async result => {
            setskills(result.data);
        })
        .catch(err => {
            console.log('/skills: ' + err);
        });
        console.log(skills);
    }, [skills.length]);
    async function create() {
        document.getElementById('pname').setAttribute('placeholder', 'Project Name');
        document.getElementById('pname').className = '';
        document.getElementById('desc').setAttribute('placeholder', '');
            document.getElementById('desc').className = '';
        if (name === '') {
            document.getElementById('pname').setAttribute('placeholder', 'Input project name');
            document.getElementById('pname').className = 'warned';
            return;
        }
        if (desc === '') {
            document.getElementById('desc').setAttribute('placeholder', 'Write project description');
            document.getElementById('desc').className = 'warned';
            return;
        }
        await axios.post('/create', {
            token: window.localStorage.getItem('token'),
            name: name,
            desc: desc,
            skills: skillsch.slice(0, skillsch.length - 1)
        })
        .then(async result => {
            if (result.data.success) {
                nav('/land');
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <div className="create">
            <div className="createform">
                <div className="fblock">
                    <input onChange={event=>(setname(event.target.value))} value={name} type="text" id='pname' placeholder="Project Name"/>
                </div>
                <div className="sblock">
                    <p>Description:</p>
                    <textarea onChange={event=>(setdesc(event.target.value))} value={desc} id='desc' cols="30" rows="10"></textarea>
                    <p>Skills:</p>
                    <div className='skills'>
                        {skills.map(skill => {
                            return (
                                <div onClick={event=>{if (!skillsch.includes(skill.id)) {setskillsch(prev => prev += skill.id.toString() + ',')} else {setskillsch(prev => prev.replace(skill.id.toString() + ',', ''))}}} className={skillsch.includes(skill.id) ? "skill active" : "skill"}>{skill.name}</div>
                            );
                        })}
                    </div>
                    <button onClick={create}>Create</button>
                </div>
            </div>
        </div>
    );
};