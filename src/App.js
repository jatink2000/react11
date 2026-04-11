import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Stylepage } from './components/Stylepage';
import { About } from './components/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Propscomp } from './components/Propscomponent';

import myimage from "./images/image1.avif"

function App() {
  return (
      <>

        {/* routing : npm i react-router-dom  */}


        <BrowserRouter>
          <Link to={"/"}>Home component</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/mystyle"}>Stylepage component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/aboutpage"}>About component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Propscomp"}>Propscomp component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mystyle' element={<Stylepage/>}/>
            <Route path='/aboutpage' element={<About/>}/>
            <Route path='/Propscomp' element={<Propscomp myname="groot academy" mysecondname="groot software" image={myimage}/>}/>

          </Routes>
        </BrowserRouter>

      </>
  );
}

export default App;
