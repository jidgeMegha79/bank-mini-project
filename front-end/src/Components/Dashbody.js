import dashboardImg from '../images/dashboard.jpg'
const Dashbody=()=>{
    const div={
        backgroundImage: "linear-gradient(to right,rgba(85, 149, 214, 0.4), rgba(255, 88, 88,0.8))",
        minHeight:"920px",
        width:"100%",
        display:"flex",
        alignItem:"center"
    };
    const para={
       textAlign:'center',
       verticalAlign:"middle",
       //backgroundColor:"red"
    }
    return(
        <div style={div}>
         <div style={para} className='flex-center'>
             <h1>Thank You!! for joining with us. </h1>
         </div>
        </div>
    );
}
export default Dashbody;