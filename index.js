const express = require('express');
const app = express();
const port = 3000;

app.get('/trang-chu', (req, res) => res.end('toan'));
app.listen(port, ()=>console.log('example listening'));