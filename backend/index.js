const express=require('express');
const mysql=require('mysql2')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
//database connectivity
const db=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'Server4me#',
  database:'bank_website'
});

app.listen(3010,()=>{
    console.log("server up and running")
});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("welcome to backend server");
});
app.post("/api/userdata", (req,res)=>{
  const userinfo=JSON.parse(req.body.userdata)
  firstname=userinfo.fname;
  middlename=userinfo.mname;
  lastname=userinfo.lname;
  addressline1=userinfo.addressline1;
  addressline2=userinfo.addressline2;
  country=userinfo.countryname;
  state=userinfo.statename;
  city=userinfo.City;
  zipcode=userinfo.Zipcode;
  emailid=userinfo.email;
  phonenumber=userinfo.mobilenumber;
  accounttype=userinfo.account;
  pwd=userinfo.password;
  const sql=
  'insert into userInformation(firstname,middlename,lastname,addressline1,addressline2,country,state,city,zipcode,emailid,phonenumber,accounttype,pwd)values(?,?,?,?,?,?,?,?,?,?,?,?,?)'
  db.query(sql,
    [firstname,middlename,lastname,addressline1,addressline2,country,state,city,zipcode,emailid,phonenumber,accounttype,pwd],
    (err,result)=>{
      if(result.affectedRows>0){
        res.send({message:"Data submitted successfully"})
      }
     console.log(result.affectedRows)
    })
});
//for login user
app.post("/api/userlogin",(req,res)=>{
  username=req.body.username;
  password=req.body.password;
  const qry="SELECT * FROM userInformation WHERE emailid=? AND pwd=?"
  db.query(qry,[username,password],(err,result)=>{
    if(err){
      res.send({err:err})
    }
    if(result.length>0){
      res.send(result)
    }else{
      res.send({message:"Incorrect username or password"})
    }
  })
})

// //for transaction
// app.post("/api/credit",(req,res)=>{
//   amount=500;
//   activity="credit";
//   id=1;
//   db.query("")
// })