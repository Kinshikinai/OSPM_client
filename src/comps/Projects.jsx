import './Projects.css';
import Card from './Card.jsx';

function Projects() {
  return (
    <div className='projects'>
        <div className="projectsbox">
          <div className="search">
            <input type="text" />
            <button>Search</button>
          </div>
          <div className="cards">
            <Card imageurl="/img/space.jpg" title="Apollo Soyuz Test Project" type="Community" desc="Lorem ipsum dolor sit amet Lorem, ipsum dolor" />
            <Card imageurl="/img/space.jpg" title="Apollo Soyuz Test Project" type="NASA" desc="Lorem ipsum dolor sit amet Lorem, ipsum dolor" />
            <Card imageurl="/img/space.jpg" title="Apollo Soyuz Test Project" type="Community" desc="Lorem ipsum dolor sit amet Lorem, ipsum dolor" />
            <Card imageurl="/img/space.jpg" title="Apollo Soyuz Test Project" type="NASA" desc="Lorem ipsum dolor sit amet Lorem, ipsum dolor" />
          </div>
        </div>
    </div>
  );
}

export default Projects ;