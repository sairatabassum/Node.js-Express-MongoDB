// Using Modules
const fs = require('fs');
const http = require('http');
const url = require('url');

// const hello = 'hello world';
// console.log(hello);

//////////////////////////////////////////////////////////////
// ******Reading and Writing Files*******
// Blocking, synchronous way

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about avacado: ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File has been written');

////////////////////////////////////////////////////////
// Non-blocking, asynchronous way
// Reading and Writing Files Asynchronously

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('Will read-file');

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
/*
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const pathName = req.url;

  // Routing
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is PRODUCT');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});


server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
*/

//////////////////////////////////////////
// Building a (Very) Simple API

// ** executed once **
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overvirw');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else if (pathName === '/api') {
    // ** executed each time **
    // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
    //   const productData = JSON.parse(data);
    //   console.log(productData);
    //   res.writeHead(200, { 'Content-type': 'application/json' });
    //   res.end(data);
    // });

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
