import './App.css';
import { Login } from './comps/Login.jsx';
import { Reg } from './comps/Reg.jsx';
import { Create } from './comps/Create.jsx';
import { Nav } from './comps/Nav.jsx';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Project } from './comps/Project.jsx';
import { AP } from './comps/AP.jsx';
import Projects from './comps/Projects.jsx';
import Landing from './comps/Landing.jsx';

function App() {
  return (
    <Routes>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<><Nav/> <Create/></>}/>
      <Route path='/project' element={<><Nav/> <Project/></>}/>
      <Route path='/ap' element={<><Nav/> <AP/></>}/>
      <Route path='/projects' element={<><Nav/> <Projects/></>}/>
      <Route path='/land' element={<><Nav/> <Landing/></>}/>
    </Routes>
  );
}

export default App;