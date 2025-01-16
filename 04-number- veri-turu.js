// ******* Number Veri Türü *******

//number veri türünü tanımlamak
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat: ",
  price,
  "KDV Oranı: ",
  tax,
  "KDV Tutarı: ",
  priceTax,
  "Toplam Fiyat: ",
  total
);

console.log("String Number Örneği");
let stringNumber = "11";
console.log(stringNumber); //11
let newNumber = Number(stringNumber);
console.log(newNumber); //11

console.log("Number constructor içerisine bilgi gönderildi", Number("111"));

//arttırma ve azaltma işlemleri

counter = 320;
counter = counter + 1; //uzun yöntem
counter += 1; //kısa yöntem
counter++; //1 artırma
counter--; // 1 azaltma işlemi
counter *= 10; //çarpma işlemi
counter /= 2; //bölme işlemi

// işlem önceliği

console.log(3 + 4 * 5); //23
console.log((3 + 4) * 5); //35

// mod(kalan) alma %:
// tek mi çift mi

console.log(15 % 2); //1 ise tek, 0 ise çift sayıdır

//8erli ürün alan kolilere tüm ürünler sığar mı? artan ürün sayısı kaç olur?
console.log("Koli kalan ürün örneği", 18 % 8); //

// üs alma **:
console.log("****üs alma****");
console.log(2 * 2 * 2 * 2); //2 üzeri 4 = 16 uzun yöntem
console.log(2 ** 4); //2 üzeri 4 = 16 üs alma

//aşağı yuvarlama işlemi -> Math.floor():

console.log("****yuvarlamalar****");
console.log(Math.floor(4.7)); //4

//yukarı yuvarlama işlemi -> Math.ceil():

console.log(Math.ceil(4.2)); //5

//yakına yuvarlama işlemi -> Math.round():

console.log(Math.round(4.5)); //5
