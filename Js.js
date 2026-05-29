let cards = document.querySelectorAll(
  ".card1, .card2, .card3"
);

window.addEventListener("scroll", function(){

  cards.forEach(function(card){

    let cardTop =
    card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.classList.add("show");

    }

  });

});

let list = document.querySelector(".fa-bars-staggered");
let links_phone =document.querySelector(".links-phone");
list.addEventListener("click" , function(){
links_phone.classList.toggle("show-links");

});

