// Using Modules
const fs = require('fs');
const http = require('http');

// const hello = 'hello world';
// console.log(hello);

/////////////////////////////////////
// ******Reading and Writing Files*******
// Blocking, synchronous way
/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File has been written');
*/

//////////////////////////////////////////
// Non-blocking, asynchronous way
// Reading and Writing Files Asynchronously

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });

// fs.readFile('./txt/starttt.txt', 'utf-8', (err, data1) => { // file does not exist
/*
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('Error!!');

  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('Your file has been written');
      });
    });
  });
});
console.log('will  read file!!');
*/

//////////////////////////////////////
// Creating a Simple Web Server
