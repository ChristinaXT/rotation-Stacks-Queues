// Rotation with STACKS & QUEUES


/* ===== Rotate (STACK) - Remove from BACK/TOP and add to FRONT/BOTTOM: LIFO (Last-in-First-Out) - (like stacking records then removing from top first) ===== */

const numbers = [1, 2, 3, 4, 5];

let end = numbers.length + 1;

while(end--) {
  console.log(numbers.join(' '));
  numbers.unshift(numbers.pop());
  // numbers.pop(); // Add this part if you want to slowly remove every number from array.
}

/* ===== QUEUE - Remove from FRONT/BOTTOM and add to BACK/TOP: FIFO (First-in-FIRST-Out) - (like waiting in shopping line for checkout counter: first in line checks out first) ===== */
const digits = [7, 8, 9, 10, 11];

let last = digits.length;

while(last--) {
  console.log(digits.join(' '));
  digits.push(digits.shift());
}
