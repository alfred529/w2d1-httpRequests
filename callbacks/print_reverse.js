var https = require('https');

var getHTML = require('./http-functions');

function printHTMLReverse (html) {
  reverseHTML = "";
  //console.log(html)
  for (var i = html.length; i > 0; i--) {
    reverseHTML += html[i];
  }
  console.log(reverseHTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTMLReverse);