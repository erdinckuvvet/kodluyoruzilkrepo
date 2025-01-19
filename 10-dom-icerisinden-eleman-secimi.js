// ********** DOM İçerisininden Eleman Seçimi **********

let title = document.getElementById("title");
console.log(title);

title.innerHTML = "Party goes on!";

let link = document.querySelector("ul#list>li>a");
link.innerHTML = "Changed Link";

let kodluyoruzLink = document.querySelector("#kodluyoruzLink");
kodluyoruzLink.innerHTML = "Kodluyor muyuz?";
kodluyoruzLink.style.color = "red";     // CSS özelliklerini değiştirebiliriz.
kodluyoruzLink.style.textDecoration = "none"; 



