// ********* 11. PROMPT İLE KULLANICIDAN BİLGİ ALMAK *********

let name = prompt("Adınızı giriniz: ");

let greetings = document.querySelector("#greetings");
greetings.innerHTML = `${greetings.innerHTML} <small style ="color:red">${name}</small>`;
