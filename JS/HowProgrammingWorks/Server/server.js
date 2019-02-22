'use strict';

global.api = {};
api.http = require('http');
api.timers = require('timers');

const user = {name: 'jura', age: 22};

const routing = {
  '/': '<h1>Welcome to homepage</h1><hr>',
  '/user': user,
  '/user/name': () => user.name.toUpperCase(),
  '/user/age': () => user.age,
  '/hello': {hello: 'world', andArray: [1, 2, 3, 4, 5, 6, 7]},
  '/api/method1': (req, res) => {
    console.log(req.url + ' ' + res.statusCode);
    return {status: res.statusCode};
  },
  '/api/method2': (req) => ({
    user:user,
    url: req.url,
    cookie: req.headers.cookie
  })
};

const types = {
  object: o => JSON.stringify(o),
  string: s => s,
  undefined: () => 'not find',
  function: (fn, req, res) => JSON.stringify(fn(req,res))
};

api.http.createServer((req, res) => {
  const data = routing[req.url];
  res.end(types[typeof (data)](data, req, res));
}).listen(80);

/*
  const data = routing[req.url];
  const type = typeof (data);
  const serializer = types[type];
  const result = serializer(data, req, res);
  res.end(result);
*/

api.timers.setInterval(() => user.age++, 2000);