var utils = require('./utils');

function LazyMan(name) {
  var self = this;
  var fn = (function (n) {
    return function () {
      console.log('Hello, my name is ' + n + '.');
      self.next();
    };
  })(name);
  this.tasks = [];
  self.tasks.push(fn);
  setTimeout(function () {
    self.next();
  }, 0);
}

LazyMan.prototype.next = function () {
  var task = this.tasks.shift();
  task && task();
};

LazyMan.prototype.eat = function (type) {
  var self = this;
  var fn = (function (n) {
    return function () {
      setTimeout(function () {
        console.log('Eat ' + n + ' now.');
        self.next();
      }, 0);
    };
  })(type);
  this.tasks.push(fn);
  return this;
};

LazyMan.prototype.sleep = function (m) {
  var self = this;
  var fn = (function (n) {
    return function () {
      setTimeout(function () {
        console.log('Sleep for ' + n + ' second.');
        self.next();
      }, 0);
    };
  })(m);
  var waitFunc = utils.waitFuncFactory.call(self, m);
  this.tasks = this.tasks.concat(fn, waitFunc);
  return this;
};

LazyMan.prototype.sleepFirst = function (m) {
  var self = this;
  var fn = (function (n) {
    return function () {
      setTimeout(function () {
        console.log('Sleep First for ' + n + ' second.');
        self.next();
      }, 0);
    };
  })(m);
  var waitFunc = utils.waitFuncFactory.call(self, m);
  waitFunc.unshift(fn);
  this.tasks = waitFunc.concat(this.tasks);
  return this;
};

function LazyManFactory(name) {
  return new LazyMan(name);
}

module.exports = LazyManFactory;
