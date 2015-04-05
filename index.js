/*********************************************
 * csw-monitor                               *
 * https://github.com/slippynode/csw-monitor *
 * Copyright 2014 Adrian Sonnenschein        *
 * Released under the MIT license            *
 *********************************************/

require('./lib/server')(function (error, server) {
  if (error) throw error;
  server.listen(server.get('port'), function () {
    var host = this.address().address
      , port = this.address().port
    ;
    console.log('Listening at http://%s:%s', host, port);
  });
});