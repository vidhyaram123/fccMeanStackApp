var express = require('express');
var Yelp = require('yelp'); 
var path = require('path');
var app =  express();
var yelp = new Yelp({
 consumer_key: '64qx22Zkg2UsIWC0KRqDkA',
  consumer_secret: 'zlvHy5QN_5WXJELUlNbKrroW6JU',
  token: 'AfrFYy9TZOJLS2jFEL8iuVPTyEHWKh3Q',
  token_secret: '7RJpB9Dyf9cwBcYEODMgYfOxQ40',
});


app.get("/yelp", function(req,res){
    console.log("In function : "+req.query.zip)

yelp.search({ term: 'bar', location: req.query.zip})
.then(function (data) {
  var jsonString = JSON.stringify(data); // convert data to JSON string
  console.log("Bus"+JSON.parse(jsonString).businesses);
  res.json(JSON.parse(jsonString).businesses);
})
.catch(function (err) {
  console.error(err);
});
});
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,'index.html'),function(err){
        
    });
    
})

app.listen(process.env.PORT||8080,function(req,res){
console.log('Server started at 8080');
})