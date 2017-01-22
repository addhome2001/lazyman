function createArrayFromN(m) {
  return Array.apply(null, { length: m }).map(function (e, i) {
    return i + 1;
  });
}

function countRemainSecond(sec) {
  return function (next) {
    setTimeout(function () {
      console.log('Wait for ' + sec + ' second.');
      next();
    }, 1000);
  };
}

function waitFuncFactory(m) {
  return createArrayFromN(m).map(countRemainSecond);
}

/**
 * [sleepTasks description]
 * @param  {Function} fn   [description]
 * @param  {[type]}   m    [description]
 * @return {[type]}        [description]
 */
function sleepTasks(fn, m) {
  return [].concat(fn, waitFuncFactory(m));
}

module.exports = {
  sleepTasks: sleepTasks,
};
