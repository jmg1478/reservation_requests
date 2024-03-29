// Dependencies
// ===========================================================
var express = require("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3012;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
var reservations = [
    {
      id: "1122",
      Name: "Johnathan Mundt",
      Email: "JohnathanMundt@gmail.com",
      Phone: "1112223333"
    },
    {
      id: "1133",
      Name: "Keila Vizcarra",
      Email: "KeilaVizcarra@gmail.com",
      Phone: "3334445555"
    },
    {
      id: "1144",
      Name: "Max Reinmueller",
      Email: "MaxReinmueller@gmail.com",
      Phone: "5556667777"
    },
    {
      id: "1155",
      Name: "Raul Gonzalez",
      Email: "RaulGonzalez@gmail.com",
      Phone: "7778889999"
    },
  ];

// Routes
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reservation.html"))
});

app.get("/api/tables", function(req,res){
    return res.json(reservations);
})

app.post("/api/people", function(req, res) {
    var person = req.body;
  console.log(person.Name);
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var name = person.Name.replace(/\s+/g, "").toLowerCase();
  console.log(name);
  
    // console.log(person);
  
    // reservations.push(person);
  
    // res.json(person);
  });

app.listen(PORT, function(){
    console.log("App listening on PORT "+PORT);
});