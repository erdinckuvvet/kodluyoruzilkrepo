// ******* Template Literals *******

// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

let userName = "erdinc";
const DOMAIN = "gmail.com";
let email = userName + "@" + DOMAIN;

console.log("Merhaba", userName, "sitemize hoşgeldin", "mail adresin:", email);

// Template literals ile aynı işlemi yapalım
let info = `Merhaba ${userName} sitemize hoşgeldin. Mail adresin: ${email}`;
console.log(info);

let data = `Yaşınız: 2025-1991 = ${2025 - 1991}`;
console.log(data);

let zaman = `Saat: ${new Date().getHours()}:${new Date().getMinutes()}`;
console.log(zaman);
