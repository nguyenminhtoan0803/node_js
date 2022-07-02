/*
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');

const app = express();

const path = require('path');

//http logger
app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, '../src/resource/views'));

console.log(__dirname);

app.get('/trang-chu', (req, res) => {
    res.render('home');
});

app.listen(3000);
*/
//require variable
//const myDate = require('myDate');
const http = require('http');
const url = require('url');
const fs = require('fs');

//createServer
http.createServer(function (req, res) {
 
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });

      
//  // res.write('the date current' + myDate.myDate());
// //  let q = url.parse(req.url, true).query;//query string
// //  let txt = q.year + " " + q.month;
//   //res.write(req.url);
//   res.end();
}).listen(3000);

//fs
