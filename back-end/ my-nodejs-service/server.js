const express=require('express');
const mysql=require('mysql2')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
//database connectivity
const db=mysql.createConnection({
  // host:'localhost',
  // user:'root',
  // password:'Server4me#',
  // database:'bank_website',
  // multipleStatements: true  
  host:'34.29.218.68',
  user:'root',
  password:'Server4me#',
  database:'bank-database',
  multipleStatements: true

});

//to check wheather database is connected or not
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server up and running on port ${PORT}`)
});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("welcome to backend server");
});
app.post("/api/signup", (req,res)=>{
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
      if(err){
        res.send(err)
        console.log(err)
      }else{
        if(result.affectedRows>0){        
        res.send(result)
      }
    }
     
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
    }else{
      res.send(result)
      console.log('success')
    }
  })
})

//for deposit
app.post("/api/deposit",(req,res)=>{
 amount=req.body.amount;
 id=req.body.id;
 const qry="insert into transaction(accountnumber,activity,amount,accountbalance) values((select accountnumber from userInformation where id=?),'credit',?,(select balance from userInformation where id=?))"
 db.query("update userInformation set balance=balance+? where id=?",[amount,id],(err,result)=>{
 if(result.affectedRows===1){
  db.query(qry,[id,amount,id],(err,result)=>{
    if(result.affectedRows===1){
    res.send({message:"your account credited with ₹ "+amount +" successfully"})
    console.log('success')
    }
  })
}else{res.send({message:"Something went wrong"})}
console.log(result)
})

 })
 //for withdraw
 app.post("/api/withdraw",(req,res)=>{
  amount=req.body.amount;
  id=req.body.id;
  const qry="insert into transaction(accountnumber,activity,amount,accountbalance) values((select accountnumber from userInformation where id=?),'debit',?,(select balance from userInformation where id=?))"
db.query("update userInformation set balance=balance-? where id=? AND balance>=?",[amount,id,amount],(err,result)=>{   

    if(result.affectedRows===1){  
      db.query(qry,[id,amount,id,amount],(err,result)=>{
        res.send({message:"Your Account is debited with ₹ "+amount +" successfully"})
      })
    }else{
      res.send({message:"You have not sufficient balance to withdraw"})
    }
})
  })
  //for transaction
  app.post("/api/transaction",(req,res)=>{
    id=req.body.id
    const qry="select * from transaction where accountnumber=(select accountnumber from userInformation where id=?);"
    db.query(qry,id,(err,result)=>{
      if(result){
      res.send(result)
      }
    })
  })
  //for view balance
  app.post("/api/viewbalance",(req,res)=>{
    id=req.body.id
    const qry="select balance from userInformation where id=?"
    db.query(qry,id,(err,result)=>{
      res.send(result)
      console.log(result)
    })
  })
  //for user profile update
  app.put("/api/updateprofile", (req,res)=>{
    const userinfo=JSON.parse(req.body.userinfor)
    userid=userinfo.id
    firstname=userinfo.firstname;
    middlename=userinfo.middlename;
    lastname=userinfo.lastname;
    addressline1=userinfo.addressline1;
    addressline2=userinfo.addressline2;
    country=userinfo.country;
    state=userinfo.state;
    city=userinfo.city;
    zipcode=userinfo.zipcode;
    emailid=userinfo.emailid;
    phonenumber=userinfo.phonenumber;
    const sql='UPDATE  userInformation SET firstname=?,middlename =?,lastname =?,addressline1=?,addressline2=?,country=?,state=?,city=?,zipcode=?,emailid=?,phonenumber=? WHERE id=?'
    db.query(sql,[firstname,middlename,lastname,addressline1,addressline2,country,state,city,zipcode,emailid,phonenumber,userid],(err,result)=>{
        if(err) throw err
        console.log("success")
        if(result.affectedRows>0){        
          res.send(result)
        }
             
      })
  });
  app.get("/api/v1/devices",(req,res)=>{
    db.query("select * from devices",(err,result)=>{
      res.send(result)
      console.log(result)
    })
  })
