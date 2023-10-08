import './Landing.css';
import Nletter from '../img/Group 2.svg';
import Aletter from '../img/Group 3.svg'; 
import Sletter from '../img/Group 1.svg';

function Landing() {
  return (
    <div id="main" class="firstblock">
      <p class="headers">
        FIND A PROJECT <br />
       AND MEMBERS
      </p>
      <p class="bodies">

        Our team provides a marketplace that will help you<br />
          become a participant in Open Source projects from <br />
          NASA, as well as create your own project and find <br />
          partners for it.
      </p>
      <div class="iconanimated">
        <img
          style={{"animation-delay": "0s"}}
          src={Nletter}
          alt="I"
        />
        <img
          style={{"animation-delay": "0.2s"}}
          src={Aletter}
          alt="M"
        />
        <img
          style={{"animation-delay": "0.4s"}}
          src={Sletter}
          alt="E"
        />
        <img
          style={{"animation-delay": "0.6s"}}
          src={Aletter}
          alt="X"
        />
      </div>

    </div>
  );
}

export default Landing;