import {useState,useEffect} from 'react'
//import {Context} from '../App'
import Axios from 'axios'
import DashHero from './DashHero'
const Withdrow=(props)=>{
  //const userdata=useContext(Context) //capture data from login component
  const userdata=(JSON.parse(sessionStorage.getItem("userdata")));
  const [show, setShow] = useState(false); // for show and hide modal
  //const[amount,setAmount]=useState() // for amount to be widthdraw
  const [status,setStatus] =useState('')
  var dashherodata={};    
   const dataHandler=(dashhero)=>{
     dashherodata ={...dashhero}
    setShow(dashherodata.sbt)
    console.log(status)
    console.log(show)

   }
   
  //const handleClose = () => {
  // setShow(false);  //to close modal
  // setStatus('')
  //}
  //post amount withdraw request 
   const data={
     name:"Withdraw Form",
     button:"Withdraw amount",
     status:status
   }  
  useEffect(()=>{
    console.log("useeffect")
    if(dashherodata.sbt===true){
    if(dashherodata.amt>0){ //for checking user entered valid amount or not
    Axios.post("http://localhost:3010/api/withdraw",{
        amount:dashherodata.amt,
        id:userdata[0].id //captured from login
    }).then((response)=>{   
       setStatus(response.data.message)
    }).catch((err)=>{
      alert("can not connect to the server")
    })         
  }else setStatus("Please enter valid Amount")
  
}
  },[show]);

  
  return(
    <div>
    <DashHero onDataSubmit={dataHandler} {...data} />
    </div>
  );
}
export default Withdrow;
