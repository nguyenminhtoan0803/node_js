//require module url
const url = require('url');
const adr = 'http://localhost:3000/default.html?year=2017&month=february';
const q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const data = q.query;
console.log(data.month);