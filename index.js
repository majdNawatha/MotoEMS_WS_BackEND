require('./mangoconnect');
require('./server');
// const express = require('express'),
//       url = require('url'),
//      bodyParser = require('body-parser'),
//      mangoconnect = require('./mangoconnect'),
//      app = express(),
//      injured = require('./injuredSchema'),
//      port = process.env.PORT || 3000;
 


//    app.use('assets',express.static('${__dirname}/public'))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });


//    app.get('/test', function(req,res){
//       injured.find().then(function(results){
//                 console.log(' Get All Data :P ');
//                 console.log(results);
//                 res.json(results);
//       }).catch(function(e){
//         res.json(e);
//       });
//   	});

//  app.get('/test/:id', function(req,res){
//      var urlPart = url.parse(req.url,true);
//      var query = urlPart.query;
//      console.log(' Search ID--> ' + req.params.id );

//       injured.find({injuredname: + req.params.id }).then(function(results){
//                 res.json(results);
//       }).catch(function(e){
//         res.json(e);
//       });
//     });

//     app.get('*', function(req,res){
//       res.send('Got Lost? This is Friendly 404 Page ;) ');
//       console.log(' 404 Get Lost ');
//     });

//         app.listen(port);
//       	console.log('listening to port :  '+ port );




// res.set('Content-Type' ,'text/html');
 //res.send('<html><body>hi</body></html>');