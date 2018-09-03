var https = require('https');

function getAndPrintHTML (options, callbackOutput) {

  /* Add your code here */

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var bufferStr = "";
    response.on('data', function (data) {
      //console.log(data)
      bufferStr += data;
    });

    response.on('end', function() {
      callbackOutput(bufferStr);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML)