import './Projects.css';

function Card(props) {
  return (
        <div className='card'>
            <img src={props.imageurl} alt="" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <span>Type:</span> 
            <b>{props.type}</b>
        </div>
  );
}

export default Card;