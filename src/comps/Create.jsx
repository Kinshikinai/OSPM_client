import './Create.css';

export function Create() {
    async function create() {

    }
    return (
        <div className="create">
            <div className="createform">
                <div className="fblock">
                    <input type="text" id='pname' placeholder="Project Name"/>
                </div>
                <div className="sblock">
                    <p>Description:</p>
                    <textarea cols="30" rows="10"></textarea>
                    <p>Skills:</p>
                    <div className='skills'>
                        <div className="skill">Web-Dev</div>
                        <div className="skill">Astrophysics</div>
                        <div className="skill">Python</div>
                        <div className="skill">Biology</div>
                        <div className="skill">Chemistry</div>
                    </div>
                    <button onClick={create}>Create</button>
                </div>
            </div>
        </div>
    );
};