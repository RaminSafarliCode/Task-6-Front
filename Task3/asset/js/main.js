/* All of the methods were written and commented, if you want to check ,please, uncommented them */

const arr = [1092, 54, 32, 78, 92];

/* Custom Map Method */

// Array.prototype.customMap = function (callBackFunction) {
//   const newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callBackFunction(this[i], i, this));
//   }

//   return newArr;
// };

// const result = arr.customMap((element, index, array) => {
//   return element * 5;
// });

// console.log(result);

/* Custom Reduce Mehtod */

// Array.prototype.customReduce = function (callBackFunction, initialValue = 0) {
//   let a = 0;
//   for (let i = 0; i < this.length; i++) {
//     callBackFunction((a += this[i]));
//   }
//   return a + initialValue;
// };

// const result = arr.customReduce((acc, element) => {
//   return acc + element;
// });
// console.log(result);

/* Custom Filter Method */

// Array.prototype.customFilter = function (callbackFunction) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callbackFunction(this[i])) {
//       newArr.push(callbackFunction(this[i], i, this));
//     }
//   }
//   return newArr;
// };

// const result = arr.customFilter((element, index, array) => {
//   if (element > 2) {
//     return element;
//   }
// });

// console.log(result);

/* Custom Some method */

// Array.prototype.customSome = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     if (callBackFunction(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };

// const result = arr.customSome((element, index, array) => element % 2 == 0);
// console.log(result);

/* Custom Every Method */

// Array.prototype.customEvery = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callBackFunction(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// const result = arr.customEvery((element, index, array) => element % 2 == 0);
// console.log(result);

/* Custom Foreach Method */

// Array.prototype.customForeach = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     callBackFunction(this[i], i, this);
//   }
// };

// const result = arr.customForeach((element, index, array) => {
//   console.log(element);
// });
