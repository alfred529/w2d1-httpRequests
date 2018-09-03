var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var bufferStr = "";
    response.on('data', function (data) {
      //console.log(data)
      bufferStr += data;
    });

    response.on('end', function() {
      console.log(bufferStr);
      console.log('Response stream complete.');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)