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
  database:'bank_website',
  multipleStatements: true
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