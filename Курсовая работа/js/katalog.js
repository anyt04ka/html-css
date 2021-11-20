"use strict";

let katalog = {
    bruki: {
        title: "Брюки",
        price: 2000,
        count: 50,
        img: "img/bruki.jpg",
        buy: "Добавить в корзину"
    },
    galstuk: {
        title: "Галстук",
        price: 800,
        count: 40,
        img: "img/galstuk.jpg",
        buy: "Добавить в корзину"
    },
    kurtka: {
        title: "Куртка",
        price: 4700,
        count: 12,
        img: "img/kurtka.jpg",
        buy: "Добавить в корзину"
    },
    botinki: {
        title: "Ботинки",
        price: 7000,
        count: 0,
        img: "img/botinki.jpg",
        buy: "Добавить в корзину"
    },
    remen: {
        title: "Ремень",
        price: 1300,
        count: 5,
        img: "img/remen.jpg",
        buy: "Добавить в корзину"
    },
    noski: {
        title: "Носки",
        price: 1300,
        count: 5,
        img: "img/noski.jpg",
        buy: "Добавить в корзину"
    }
};


let cardsSection = document.querySelector(".cards-section");
// [{}, {}, {}, {}, {}]
Object.values(katalog).forEach((obj) => { 
    let card = document.createElement("div"); 
    card.classList.add("card");

    let title = document.createElement("h2"); 
    title.innerText = obj.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб.`;

    let buy = document.createElement("a");
    buy.classList.add("card__buy");
    buy.innerText = "Добавить в корзину";

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (obj.count !== 0) { 
        count.innerHTML = `
        <button>-</button>
        <span>0</span>
        <button>+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count, buy); 
    cardsSection.append(card); 

}); 