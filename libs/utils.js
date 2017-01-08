function createArrayFromN(m) {
  return Array.apply(null, { length: m }).map(function (e, i) {
    return i + 1;
  });
}

function countRemainSecond(sec) {
  var self = this;
  return (function (m) {
    return function () {
      setTimeout(function () {
        console.log('Wait for ' + m + ' second.');
        self.next();
      }, 1000);
    };
  })(sec);
}

function waitFuncFactory(m) {
  var self = this;
  return createArrayFromN(m).map(function (i) {
    return countRemainSecond.call(self, i);
  });
}

module.exports = {
  waitFuncFactory: waitFuncFactory,
  countRemainSecond: countRemainSecond,
  createArrayFromN: createArrayFromN,
};
