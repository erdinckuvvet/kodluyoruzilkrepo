// *********** string veri türü işlemleri ***********

let email = "kuvveterdinc@gmail.com";
let firstName = "Erdinç";
let lastName = "KUVVET";

// string karakter sayısı -> length
console.log(email.length);
//ilk karakteri bulmak -> [0]
console.log(`email adresinin  ilk karakteri: ${email[0]}`);
console.log(`email adresinin  ilk karakteri: ${email.charAt(0)}`);
//büyük harf / küçük harf dönüşümü -> toUpperCase(), toLowerCase()
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());
// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search()
//belli bir karakterden itibaren al -> slice()
let at = email.search("@");
let DOMAIN = email.slice(at + 1);
console.log(`Domain: ${DOMAIN}`);
console.log(`Domainin uzantısız hali: ${DOMAIN.slice(0, DOMAIN.indexOf("."))}`);
//bilgiyi değiştir -> replace()

let newEmail = email.replace("gmail.com", "kodluyoruz.org");
console.log(`yeni email adresi: ${newEmail}`);

//istediğim bilgi var mı? -> includes()
//true ya da false döner
console.log(email.includes("gmail")); // true
console.log(email.includes("hotmail")); // false

//istediğim bilgiyle başladı mı? bitti mi? -> startsWith(), endsWith()
console.log(email.startsWith("kuvvet")); // true
console.log(newEmail.endsWith("org")); // true
//ilk harfi büyük yapmak -> capitalize()
console.log("****************");
let ilkHarf = firstName[0].toUpperCase();
firstName = firstName.slice(1).toLowerCase();
console.log(`firstName: ${ilkHarf}${firstName}`);
