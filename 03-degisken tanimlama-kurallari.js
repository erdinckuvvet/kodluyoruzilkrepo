// ***** Değisken Tanımlama Kuralları *****

// ### Değişken Genel Tanımlama Kuralları

//camelCase Kullanımı:

let fullname = ""; //yanlış :((
let kodluyoruzserver = ""; //yanlış :((
let kodluyoruzServer = ""; //doğru  :)
let fullName = ""; //doğru  :)
let kodluyoruzServerName = ""; //doğru  :)
let kodluyoruzSErverName = ""; //yanlış :((

let firstName = "Erdinç",
  lastName = "Kuvvet"; //doğru  :)
//fakat ayrı ayrı yazmak kod okunurluğunu artırır

//UPPER_CASE Kullanımı:

const password = ""; //yanlış :((
const PASSWORD = ""; //doğru  :)
const SERVER_PASSWORD = ""; //doğru  :)

// Değişkenlerde Türkçe ve diğer dillerin kullanımı:

let türkçeBilgi = "Türkçe Bilgi Yazdırılıyor"; // çalışır fakat istenmeyen bir kullanım
let turkceBilgi = "Türkçe Bilgi Yazdırılıyor"; // çalışır fakat istenmeyen bir kullanım
let info = "Türkçe Bilgi Yazdırılıyor"; // daha doğru  :) kullanım

// anlamsız değişken isimleri kullanmamak:
let x = 0; //yanlış :((, değişken ismi anlamsız xCoord, yCoord gibi kullanılabilir

// ### Ek Bilgi:
// 1: boolean tanımlarken is/has kullanımı:

let isActive = true; // doğru  :)
let hasPassword = false; // doğru  :)

// 2: Line Length < 80
