import dashboardImg from '../images/dash.png'
const Dashbody=()=>{
    const dashdiv={
        backgroundImage:"linear-gradient(to right,rgba(85, 149, 214, 0.4), rgba(255, 100, 100,0.8))",
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
        <div style={dashdiv}>
        <img src={dashboardImg}></img>
        </div>
    );
}
export default Dashbody;