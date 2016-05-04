var restify = require('restify');

var server = restify.createServer();

function sendHelloV1(req, res, next) {
  res.send({hello: req.params.name});
  return next();
}

function sendHelloV2(req, res, next) {
  res.send({helloThere: req.params.name});
  return next();
}

function sendGoodNightV1(req, res, next) {
  res.send({GoodNight: req.params.name});
  return next();
}

var helloPATH = '/hello/:name';
server.get({path: helloPATH, version: ['1.0.0']}, sendHelloV1);
server.get({path: helloPATH, version: ['2.0.0']}, sendHelloV2);

var goodNightPath = '/goodnight/:name';
server.get({path: goodNightPath, version: ['1.0.0', '2.0.0']}, sendGoodNightV1);

server.listen(8080);