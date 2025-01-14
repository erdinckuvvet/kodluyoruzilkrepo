// ******* let ve const ile Değişken Tanımlama *******

// var ile değişken tanımlamak

//var serverName = "api.kodluyoruz.org";
//console.log(serverName);

// let ile değişkeni boş tanımlamak
let serverName;
console.log(serverName);

// let ile değişkene bilgi atamak
serverName = "https://kodluyoruz.org";
console.log(serverName);
// let ile değişkene bilgi atayarak tekrar tanımlamak

let password = "1234";
console.log(password);

//değişken ataması yapmadan önce kullanmaya çalışmak
/* HATALI KULLANIM
 console.log(fullName);
let fullName = "Hakan Yalçınkaya";
*/
let fullName = "Hakan Yalçınkaya";
console.log(fullName);

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek

fullName = "Lorem Ipsum Dolor";
console.log(fullName);

//birleştirme veya ekleme işlemi yapmak

fullName += " Yeni Eklenen Bilgi";
console.log(fullName);

// const ile değiişkeni boş tanımlamaya çalışmak :(
//const serverPassword;
// const ile değişkeni tanımlamak
const serverPassword = 1234;
console.log(serverPassword);
//serverPassword = 5678; // hatalı const ile tanımlanan değişkenin içindeki bilgi değiştirilemez
