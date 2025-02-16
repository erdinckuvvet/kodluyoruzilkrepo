// 17- Terenary Operator il Short if kullanımı

// Ternary Operator
// Ternary operatörü, if-else yapısının kısa halidir.

// Syntax
// condition ? expression1 : expression2;

// Örnek 1
let sayi = 5;
sayi > 5
  ? console.log("Sayı 5'ten büyüktür.")
  : console.log("Sayı 5'ten küçük veya eşittir.");

let item = "elma";
item.length > 0 ? console.log(`geçerli`) : console.log("Boş değer");

// Örnek 2
console.log("**********");
var money;
var canBuy =
  money < 17
    ? "Satın alamazsın.."
    : money > 30
    ? "Satın alabilirsin.."
    : "Para miktarını girmen gerekmektedir..";

console.log(canBuy);
