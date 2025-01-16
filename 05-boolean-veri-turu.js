// ******** 5- Boolean Veri Türü ********

// 0 ve 1i anlamak

let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); //false

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); // false

// 0, -0, null, false, NaN, undefined, ("") -> false

Boolean(0); // false
Boolean(-0); // false
Boolean(-0.1); // true
Boolean(null); // false

userName = "asdaf";
Boolean(userName.length > 0); // true

console.log("*************");
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

console.log("*************");
var x = 10 / "a";
console.log(x);
console.log(Boolean(x));

var y = "" || -2 || 'JavaScript';
console.log(Boolean(y))

var z = {2:'js'};
console.log(typeof z);
console.log(z);
console.log(Boolean(z))

console.log("*************");
var t = "" && -2 && 'JavaScript'; console.log(Boolean(t));
