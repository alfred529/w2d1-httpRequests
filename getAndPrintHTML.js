var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {

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

getAndPrintHTML()