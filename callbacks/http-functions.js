var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var bufferStr = "";
    response.on('data', function (data) {
      bufferStr += data;
    });

    response.on('end', function() {
      callback(bufferStr);
    });

  });

}


module.exports = getHTML;