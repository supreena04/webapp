//Require express
const express = require("express");

//app object
const app = express();

//main page
app.get("/", function (req, res) {
  res.send(
    "<h1>Welcome to my first Node.js web site.</h1><br><a href='/contact'>Contact</a><br><a href='/bio'>Bio</a>"
  );
});

//contact page
app.get("/contact", function (req, res) {
  res.send(
    "My name is supreena, and I you can contact me here: kadipi@gmail.com <br><a href='/'>Home</a><br><a href='/bio'>Bio</a>"
  );
});

//contact page
app.get("/bio", function (req, res) {
  res.send(
    "Name:supreena, Occupation: Student, School: Franklin Uni, Hobby: Running,  Favorite film: Forrest Gump <br><a href='/contact'>Contact</a><br><a href='/'>Home</a>"
  );
});

//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port = 8002;
}
app.listen(port);
