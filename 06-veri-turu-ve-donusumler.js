// ******** Veri Türünü Öğrenmek ve Veri Türü Dönüşümleri ********

// Veri Türünü Öğrenmek typeof:
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price: ", typeof price);

console.log("stringPrice: ", typeof stringPrice);

console.log("hasPassword: ", typeof hasPassword);

// string(metinsel) bilgileri int ve floata dönüştürmek

let number1 = "11";
number1 = parseInt(number1);
console.log("number1: ", number1, typeof number1);

let number2 = "11px";
number2 = parseInt(number1);
console.log("number2: ", number2, typeof number2);

let number3 = "11px";
number3 = Number(number3); //üstteki örnekle fark burada
console.log("number3: ", number3, typeof number3);

let number4 = "11.4px";
number4 = parseFloat(number4); //üstteki örnekle fark burada
console.log("number4: ", number4, typeof number4);

// number veri türünden stringe dönüştürmek

let number5 = 55;
number5 = number5.toString();
console.log("number5: ", number5, typeof number5);

// örnekler
console.log("*************");
console.log("" + 123, typeof ("" + 123));
console.log(12 / "6", typeof (12 / "6"));
console.log("foo" + +"bar");
