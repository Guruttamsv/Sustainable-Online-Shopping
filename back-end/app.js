const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '8889',
  database: 'nodemysql'
});

//connect
db.connect((err) => {
  if (err) throw err;
  console.log("MySql connected...");
});
const app = express();

//create DB
app.get("/createdb", (req, res) => {
  let sql = "Create database nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

//create table using url to call them
app.get('/createpoststable',(req, res)=>{
  let sql='create table posts(id int auto_increment, title varchar(255), primary key (id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table created...");
  });
});

//select single row gotta use `` for getting value from url and '' when called as a variable ${variableName}
app.get('/getpost/:id',(req, res)=>{
  let sql=`select * from posts where id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post fetched...");
  });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});

