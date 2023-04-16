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
import { useState,createContext } from 'react';
import Signupsuccess from './Components/Signupsuccess';
import Deposit from './Components/Deposit'
import Withdraw from './Components/Withdraw'
import Viewbalance from './Components/Viewbalance'
import Transaction from './Components/Transaction'

//usecontext for send userid globaly between components
const Context=createContext()
function App() {
  //usestate for sending login user data to dashboard and its child component
  const[userdata,setUserdata]=useState([]);
 
  

  let location=useLocation();
  //for accessing user data in dashboard component
  // const handleUserlogin=(userdata)=>{
  //   setUserdata(userdata)
  // }
  
  
  
  return (
    <div >
      {location.pathname==='/' || location.pathname==='/contactUs' || location.pathname==='/services' ?<Navbar/>:null}
     
      <Routes>
        <Route path='/' element={<Home />}>
        <Route index element={<Home2/>}/>
        
        </Route>
         {/* provide setUserdata to login for state updating when user login */}
        <Route path='/login' element={<Login setId={setUserdata}/>}></Route>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signup/signupsuccess' element={<Signupsuccess/>}/>
        
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        
        <Route path='/dashboard' element={
        <Context.Provider value={userdata}>
        <Dashboard />
        </Context.Provider>
        }>
        <Route path='withdraw' element={<Withdraw/>}/>
        <Route path='deposit' element={<Deposit/>}/>
        <Route path='transaction' element={<Transaction/>}/>
        <Route path='viewbalance' element={<Viewbalance/>}/>
        </Route>
        <Route path='*' element={<NoPage/>}></Route>
      </Routes>
      {location.pathname==='/' || location.pathname==='/contactUs' || location.pathname==='/services' ?<Footer/>:null}
      

    </div>
  );
}

export default App;
export {Context};
