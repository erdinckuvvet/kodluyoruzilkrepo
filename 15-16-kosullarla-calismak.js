// *************** 15-16 Koşul Yapısı ***************
// if (kosul) { // eğer koşul doğru ise burası çalışır
//     // koşul doğru ise burası çalışır
// } else { // koşul yanlış ise burası çalışır
//     // koşul yanlış ise burası çalışır
// }

// Örnek 1
let sayi = 5;
if (sayi > 5) {
  console.log("Sayı 5'ten büyüktür.");
} else {
  console.log("Sayı 5'ten küçük veya eşittir.");
}

let uName = prompt("Kullanıcı adınızı giriniz:");

if (uName.length > 0) {
  console.log(`Merhaba ${uName}`);
}

/*
If  is odd, print Weird
If  is even and in the inclusive range of  2 to 5, print Not Weird
If  is even and in the inclusive range of  6 to 20 , print Weird
If  is even and greater than 20 , print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.
*/

let N = 24;

if (N % 2 !== 0) {
  console.log("Weird");
} else if (N % 2 == 0 && N >= 2 && N <= 5) {
  console.log("Not Weird");
} else if (N % 2 == 0 && N >= 6 && N <= 20) {
  console.log("Weird");
} else if (N % 2 == 0 && N > 20) {
  console.log("Not Weird");
} else {
  console.log("Not Weird");
}

// Örnek 2
let username = prompt("Kullanıcı adınızı giriniz:");
let age = prompt("Yaşınızı giriniz:");
let info = document.querySelector("#info");

if (username && age >= 18) {
  info.innerHTML = "Ehliyet alabilirsiniz.";
} else if (!username) {
  info.innerHTML = "Kullanıcı adı boş olamaz.";
} else if (!(age >= 18)) {
  info.innerHTML = "Kullanıcı adınız yok veya yaşınız 18'den küçük.";
}

/*Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set {a,e,i,o,u} , then return A.
If the first character in string  is in the set {b,c,d,f,g}, then return B.
If the first character in string  is in the set {h,j,k,l,m}, then return C.
If the first character in string  is in the set {n,p,r,s,t,v,w,x,y,z}, then return D. */

function getLetter(s) {
  let letter;
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
    default:
      letter = "Invalid";
  }
  return letter;
}
