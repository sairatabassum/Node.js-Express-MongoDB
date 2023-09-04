// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Cal = require("./test-module-1");
const calc1 = new Cal();
console.log(calc1.add(2, 5));

// exports
const { add, multiply } = require("./test-module-2");
console.log(add(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
