// Liste İçerisindeki Elemana Ulaşmak veya Eleman Eklemek

let item = document.querySelector("ul#list>li:last-child");
console.log(item);
item.innerHTML = "Son Eleman Değiştirildi";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "İlk Eleman Değiştirildi";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Yeni OLuşturulup Eklenen Eleman";

//ulDOM.appendChild(liDOM);  //en sona ekler

ulDOM.prepend(liDOM); //en başa ekler


