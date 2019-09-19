import Person from './modules/DataObject.js';
// this is an IIFE => Immediately invoked function expression
// this is the JavaScript Module Pattern
(() => {
    console.log('fired!');

    console.log(Person);
})();