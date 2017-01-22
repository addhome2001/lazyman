const lazyMan = require('./lib');

/**
 *  Wait 3 second before introduction myself and eat.
 */

lazyMan('Ben').eat('breakfast').eat('dinner').sleepFirst(3);

/**
 * Wait 3 second before eat dinner but after introduction myself.
 */

// lazyMan('Ben').sleep(3).eat('dinner');

/**
 * Wait 3 second before eat dinner but after introduction myself and eat breakfast.
 */

// lazyMan('Ben').eat('breakfast').sleep('3').eat('dinner');

 /**
  * Wait 3 second after eat dinner and introduction myself.
  */

// lazyMan('Ben').eat('dinner').sleep(3);
