create table userInformation(id int auto_increment primary key,firstname varchar(20) not null,middlename varchar(20) not null,lastname varchar(20) not null,
addressline1 varchar(100) not null,addressline2 varchar(100),country varchar(50) not null,state varchar(50) not null,city varchar(50) not null,zipcode int not null,
emailid varchar(100) not null unique,phonenumber varchar(10) not null unique,accounttype varchar(20) not null,pwd varchar(8) not null);

select * from userInformation;

use bank_website;

desc userInformation;
 

 
 create table transaction(id int auto_increment not null primary key,accountnumber bigint  not null,
 activity varchar(50) not null ,amount int not null,accountbalance decimal, txdate date default(current_date));
 
 desc transaction;
 #for credit ;
 
 select balance from userInformation where id=1;
 
 update userInformation set balance=balance+500 where id=1;
 
 insert into transaction(accountnumber,activity,amount,accountbalance) 
 values((select accountnumber from userInformation where id=1),"credit",500,(select balance from userInformation where id=1));
 
 select * from transaction;
 
 # for debit;
   select balance from userInformation where id=1;
   
   update userInformation set balance=balance-1200 where id=1 AND balance>=1200;
   
    insert into transaction(accountnumber,activity,amount,accountbalance) 
 values((select accountnumber from userInformation where id=1),"debit",500,(select balance from userInformation where id=1));
   