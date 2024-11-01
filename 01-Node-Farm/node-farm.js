const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const slugs = productData.map((el) => slugify(el.productName, { lower: true }));

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(url.parse(req.url, true));
  const { query, pathname } = url.parse(req.url, true);

  //   Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardHtml = productData
      .map((el) => replaceTemplate(tempCard, el))
      .join('');

    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
    res.end(output);
  }

  //   Product page
  else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const endURL = query.name;
    const productName = endURL.replace(/-/g, ' ').toUpperCase();
    // console.log(productName);
    const product = productData.find(
      (product) => product.productName.toUpperCase() === productName
    );
    // console.log(product);
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }

  //   API
  else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }

  //   Not found
  else {
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
