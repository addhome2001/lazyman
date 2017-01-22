var utils = require('./utils');
var Nextable = require('nextable/lib');

function LazyMan(name) {
  var fn = function () {
    console.log('Hello, my name is ' + name + '.');
  };
  Nextable.call(this, [fn]);
}

LazyMan.prototype = Object.create(Nextable.prototype);

LazyMan.prototype.eat = function (type) {
  var fn = function (next) {
    setTimeout(function () {
      console.log('Eat ' + type + ' now.');
      next();
    }, 0);
  };
  this.pushSchedule(fn);
  return this;
};


LazyMan.prototype.sleep = function (m) {
  var self = this;
  var fn = function (next) {
    setTimeout(function () {
      console.log('Sleep for ' + m + ' second.');
      next();
    }, 0);
  };
  var waitFuncs = utils.sleepTasks(fn, m);
  this.tasks = this.tasks.concat(waitFuncs.map(this.taskFactory.bind(self)));
  return this;
};

LazyMan.prototype.sleepFirst = function (m) {
  var self = this;
  var fn = function (next) {
    setTimeout(function () {
      console.log('Sleep First for ' + m + ' second.');
      next();
    }, 0);
  };
  var waitFuncs = utils.sleepTasks(fn, m);
  this.tasks = waitFuncs.map(this.taskFactory.bind(self)).concat(this.tasks);
  return this;
};

function LazyManFactory(name) {
  return new LazyMan(name);
}

module.exports = LazyManFactory;
