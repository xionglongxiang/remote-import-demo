import add from './add.js';
import minus from './minus.js';
import modal from './modal';

let a = 3;

let c = new Promise((resolve, reject) => {
  resolve(a);
});
export { a, add, c, minus, modal };
