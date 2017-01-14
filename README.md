# lazyman

> Just lazyMans' life.

## Install
```
npm install
```

## Example

Wait 3 second before eat dinner but after introduction myself.
```js
lazyMan('Ben').eat('breakfast').sleepFirst(3);

// Will log ->
// Sleep First for 3 second.
// Wait for 1 second.
// Wait for 2 second.
// Wait for 3 second.
// Hello, my name is Ben.
// Eat breakfast now.
```
Wait 3 second before eat dinner but after introduction myself.
```js
lazyMan('Kelly').sleep(3).eat('dinner');

// Will log ->
// Hello, my name is Kelly.
// Sleep for 3 second.
// Wait for 1 second.
// Wait for 2 second.
// Wait for 3 second.
// Eat dinner now.
```

## Usage
Modify `index.js` and run `npm start`.
