//cors tested and works from outher sources https://codepen.io/ashmind/pen/oefrA 


const express = require('express');
const app = express();
const cors = require('cors');

//app.use(cors())

// these have effect on cors
app.use(cors({
  origin: ['https://www.section.io', 'http://localhost:5000', 'https://cdpn.io'],
  methods: ['GET','POST']
}));

// from this link https://stackabuse.com/reading-and-writing-json-files-with-node-js/
// JSON file
'use strict';

let jsonData = require('./superheroes.json');

//console.log(jsonData);

// from https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
// send JSON file data to browser
// , cors(), added from later example
app.get('/get2', (req, res, next) => {
  res.send(jsonData);
  console.log("res send jsonData");
});

app.post('/post2', (req, res) => {
  res.send(jsonData)
})
  



// from this link https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
// allow access from these url
// const whitelist = ['http://localhost:5000', 'http://localhost:5001']
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error())
//     }
//   }
// }

// from this link
// process.env.PORT checks any other ports OR connects 5000 if available
const PORT = process.env.PORT || 5001;


// ! not sure if these have any effect? according to this these dont have any effect  https://codepen.io/ashmind/pen/oefrA 
// from this link https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST');
//     res.header("Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

// from this link
// listen ports and console log it
app.listen(PORT, () => console.log(`Server started on ${PORT}`));