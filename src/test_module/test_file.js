var fs = require('fs');

//create file system 
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//w is file using write
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//ghi text vao file, neu file chua ton tai thi create file 
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//update file
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//thay doi noi dung cua file
//   fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

//delete file
// fs.unlink('mynewfile3.txt', function (err) {
//     if(err) throw err;
//     console.log('Deleted!');
// });

//rename file
fs.rename('mynewfile2.txt', 'mytest.txt', function (err) {
    if(err) throw err;
    console.log('Renamed!');
});