// server.js
// where your node app starts

// init project
let express = require('express');
let app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
let cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello",  (req, res) => {
  res.json({greeting: 'hello API'});
});


app.get("/api/whoami",(req,res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip || req.ips;
  let language = req.acceptsLanguages();
  let software = req.get('User-Agent');
  res.json({
    ip:ip,
    language: language[0],
    software: software
  });
});


// listen for requests :)
let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
