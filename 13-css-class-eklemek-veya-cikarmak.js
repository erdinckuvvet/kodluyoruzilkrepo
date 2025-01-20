// *************** css class eklemek veya cikarmak ***************

let greetins = document.querySelector("#greetings");
greetins.classList.add("text-primary");
greetins.classList.add("title");
greetins.classList.add("new-info", "second-class", "third-class"); //birden fazla class eklemek

greetins.classList.remove("title", "second-class", "third-class"); //birden fazla class silmek
console.log(greetins.classList);
