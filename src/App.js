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
import Ourproducts from './components/Ourproducts';
import Cartpage from './components/Cartpage';
import Inputstate from './components/Inputstate';
import { Multipleinput } from './components/Multipleinput';
import UseEffect from './components/UseEffect';
import Component1 from './components/context/Component1';
import { Usenavigate } from './components/Usenavigate';
import Uselocation from './components/Uselocation';
import ProductDetailsPage from './components/Productdetails';
import Useparams from './components/Useparams';
import ProductDetailsPage2 from './components/Productdetails2';
import { Homeclass } from './components/Homeclass';

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
          <Link to={"/Ourproducts"}>Ourproducts component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Cartpage"}>Cartpage component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Inputstate"}>Inputstate component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Multipleinput"}>Multipleinput component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/UseEffect"}>UseEffect component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Component1"}>Component1 component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Usenavigate"}>Usenavigate component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Uselocation"}>Uselocation component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Useparams/groot academy/jaipur"}>Useparams component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/Homeclass"}>Homeclass component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mystyle' element={<Stylepage/>}/>
            <Route path='/aboutpage' element={<About/>}/>
            <Route path='/Propscomp' element={<Propscomp myname="groot academy" mysecondname="groot software" image={myimage}/>}/>
            <Route path='/Localstorage' element={<Localstorage/>}/>
            <Route path='/Studentsdata' element={<Studentsdata/>}/>
            <Route path='/Usestatecomponent' element={<Usestatecomponent/>}/>
            <Route path='/Ourproducts' element={<Ourproducts/>}/>
            <Route path='/Cartpage' element={<Cartpage/>}/>
            <Route path='/Inputstate' element={<Inputstate/>}/>
            <Route path='/Multipleinput' element={<Multipleinput/>}/>
            <Route path='/UseEffect' element={<UseEffect/>}/>
            <Route path='/Component1' element={<Component1/>}/>
            <Route path='/Usenavigate' element={<Usenavigate/>}/>
            <Route path='/Uselocation' element={<Uselocation/>}/>
            <Route path='/ProductDetailsPage' element={<ProductDetailsPage/>}/>
            <Route path='/Useparams/:myname/:mycity' element={<Useparams/>}/>
            <Route path='/ProductDetailsPage2/:productdata' element={<ProductDetailsPage2/>}/>
            <Route path='/Homeclass' element={<Homeclass/>}/>

          </Routes>
        </BrowserRouter>

      </>
  );
}

export default App;
