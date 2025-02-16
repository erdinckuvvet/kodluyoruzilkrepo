// ******** KArsılaştırma Operatörleri ve Mantıksal Operatörler********

// https://www.w3schools.com/js/js_comparisons.asp

let price = "100";

// == Eşittir
console.log(price == 10); // false
console.log(price == "100"); // true
console.log(price == 100); // true

// === Tam Eşittir(değer ve tür olarak eşit mi)

console.log(price === 100); // false
console.log(price === "100"); // true
// != Eşit Değil
console.log(2 != 2); // false
console.log(2 != 3); // true

// < küçüktür

console.log(2 < 3); // true

// > büyüktür

console.log(2 > 3); // false

// <= küçük eşittir

console.log(2 <= 3); // true

// >= büyük eşittir

console.log(2 >= 3); // false

// && ve operatörü

console.log(2 == 2 && "Ahmet" == "Ahmet"); // true

// || veya operatörü

console.log(4 == 2 || "Ahmet" == "Ahmet"); // true

// ! değil operatörü (tersi)

console.log(!(2 == 2)); // false
