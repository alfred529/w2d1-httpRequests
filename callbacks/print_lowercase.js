var https = require('https');

var getHTML = require('./http-functions');

function printHTMLLowerCase (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printHTMLowerCase);
