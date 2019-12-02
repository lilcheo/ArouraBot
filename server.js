// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const faster = console.log(console.error);
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("views"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
app.listen(3000, async function() {
 await console.log("Your app is listening on port 3000")
});
