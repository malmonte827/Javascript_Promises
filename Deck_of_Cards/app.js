let BASE_URL = "https://deckofcardsapi.com/api/deck";

// 1.

$.get(`${BASE_URL}/new/draw/?count=1`).then((data) => {
    let card = data.cards[0];
    console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
});

// 2.
$.get(`${BASE_URL}/new/draw/?count=1`)
    .then((data) => {
        c1 = data.cards[0];
        deck_id = data.deck_id;
        return $.get(`${BASE_URL}/${deck_id}/draw/?count=1`);
    })
    .then((data) => {
        c2 = data.cards[0];
        [(c1, c2)].forEach((card) => {
            console.log(
                `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
            );
        });
    });

// 3.
$(function(){
let deckId = null;
let $btn = $("button");
let $cardImg = $(".card-img");

$.get(`${BASE_URL}/new/shuffle/`).then((data) => {
    deckId = data.deck_id;
    $btn.show()
});
$btn.on('click', function(){
$.get(`${BASE_URL}/${deckId}/draw`).then(data => {
    let card = data.cards[0].image
    $cardImg.append(`<img src="${card}"></img>`)
})
})
})
