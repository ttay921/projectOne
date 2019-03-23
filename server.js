// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});




//marvel api 
    //taken from marvel-api-npm
        var api = require('marvel-api')
        var marvel = api.createClient({
          publicKey: process.env.PUBLIC_KEY, 
          privateKey: process.env.PRIVATE_KEY
});


//character 1
    //app.get portion taken from spotify-api work

app.get('/mystique', function (request, response) {
        marvel.characters.findByName('Mystique')
          .then(
        r => {response.send(r.data); 
             })
  .fail(console.error)
  .done();
});
//jean grey
app.get('/jean-grey', function (request, response) {
        marvel.characters.findByName('Jean Grey')
          .then(
        r => {response.send(r.data); 
             })
  .fail(console.error)
  .done();
});

//emma frost 


app.get('/emma-frost', function (request, response) {
        marvel.characters.findByName('Emma Frost')
          .then(
        r => {response.send(r.data); 
             })
  .fail(console.error)
  .done();
});












// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});