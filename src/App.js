import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Stylepage } from './components/Stylepage';
import { About } from './components/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Propscomp } from './components/Propscomponent';

import myimage from "./images/image1.avif"
import { Localstorage } from './components/Localstorage';
import { Studentsdata } from './components/Studentsdata';
import { Usestatecomponent } from './components/Usestatecomponent';

function App() {
  return (
      <>

        {/* routing : npm i react-router-dom  */}


        <BrowserRouter>
          <Link to={"/"}>Home component</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/mystyle"}>Stylepage component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/aboutpage"}>About component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Propscomp"}>Propscomp component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Localstorage"}>Localstorage component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Studentsdata"}>Studentsdata component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Usestatecomponent"}>Usestate component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;





          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mystyle' element={<Stylepage/>}/>
            <Route path='/aboutpage' element={<About/>}/>
            <Route path='/Propscomp' element={<Propscomp myname="groot academy" mysecondname="groot software" image={myimage}/>}/>
            <Route path='/Localstorage' element={<Localstorage/>}/>
            <Route path='/Studentsdata' element={<Studentsdata/>}/>
            <Route path='/Usestatecomponent' element={<Usestatecomponent/>}/>



          </Routes>
        </BrowserRouter>

      </>
  );
}

export default App;
