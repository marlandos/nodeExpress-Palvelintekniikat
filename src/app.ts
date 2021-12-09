import { NextFunction, Request, Application, Response, response } from "express";
import express from "express";
import cors from 'cors';
import { request } from "http";
var querystring = require('querystring');
//import { send } from "process";

// Middleware
const logger = (req: Request,res: Response,next: NextFunction) => {
    console.log("Recieved from backend 1")
    next()
}

// Express
const app: Application = express();
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Cors
app.use(cors({
    origin: ['*'],
    methods: ['POST','GET','PUT']
}));

// Post
app.post('/post', (req: Request, res: Response)=>{

    // Parse body data from req
    var post_data = querystring.stringify(req.body);

    // Options for connection to backend2
    var options = {
        host: 'localhost',
        port: 5001,
        path: '/post2',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data)
        }
      };
      
      // Send request function to backend2
      var post_req = request(options, function(res_post){
        res_post.setEncoding('utf8');
        res_post.on('data', function (chunk){
            console.log('Response: ' + chunk);
            res.send(chunk);    // Print response from backend2
        });
        // Function to end request connection
        response.on('end', function() {
            res.send('ok');
          })
      });

      post_req.write(post_data);    // Send data
      post_req.end();               // End connection
})

// Get
app.get('/get2', (req: Request, res: Response) =>{

    // Parse body data from req
    var get_data = querystring.stringify(req.body);

    // Options for connection to backend2
    var options = {
        host: 'localhost',
        port: 5001,
        path: '/get2',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(get_data)
        }
      };
      
      // Send request function to backend2
      var get_req = request(options, function(res_get){
        res_get.setEncoding('utf8');
        res_get.on('data', function (chunk){
            console.log('Response: ' + chunk);
            res.send(chunk);    // Print response from backend2
        });
        // Function to end request connection
        response.on('end', function() {
            res.send('ok');
          })
      });

      get_req.write(get_data);  // Send data
      get_req.end();            // End connection
})

app.put('/put', (req: Request, res: Response) =>{

    // Parse body data from req
    var put_data = querystring.stringify(req.body);

    // Options for connection to backend2
    var options = {
        host: 'localhost',
        port: 5001,
        path: '/put2',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(put_data)
        }
      };
      
      // Send request function to backend2
      var put_req = request(options, function(res_put){
        res_put.setEncoding('utf8');
        res_put.on('data', function (chunk){
            console.log('Response: ' + chunk);
            res.send(chunk);    // Print response from backend2
        });
        // Function to end request connection
        response.on('end', function() {
            res.send('ok');
          })
      });

      put_req.write(put_data);  // Send data
      put_req.end();            // End connection

})

// Listen port
app.listen(5000, () => console.log("Backend 1 started"))