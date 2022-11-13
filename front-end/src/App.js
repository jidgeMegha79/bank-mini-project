import { Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs'
import Services from './Components/Services'
import NoPage from './Components/NoPage'
import Navbar from './Components/Navbar'
import Home2 from './Components/Home2'
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard'
import { useState } from 'react';


function App() {
  const[userdata,setUserdata]=useState();
  let location=useLocation();
  //for accessing user data in dashboard component
  const handleUserlogin=(userdata)=>{
    setUserdata(userdata)
  }
  
  
  
  return (
    <div >
      {location.pathname==='/' || location.pathname==='/contactUs' || location.pathname==='/services' ?<Navbar/>:null}
     
      <Routes>
        <Route path='/' element={<Home />}>
        <Route index element={<Home2/>}/>
        
        </Route>
        <Route path='/login' element={<Login onUserlogin={handleUserlogin}/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/dashboard' element={<Dashboard name={userdata} />}/>
        <Route path='*' element={<NoPage/>}></Route>
      </Routes>
      {location.pathname==='/' || location.pathname==='/contactUs' || location.pathname==='/services' ?<Footer/>:null}
      

    </div>
  );
}

export default App;
