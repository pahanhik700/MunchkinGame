
//функция закрытия и открытия информации о карте
var open_close_info_card = 0;
var Open_Info_Card = function() {
    let Window_info_card = document.querySelector(".card_window");

    if(open_close_info_card == 0) {
        Window_info_card.style.display = "block";
        open_close_info_card = 1;
    }
    else {
        Window_info_card.style.display = "none";
        open_close_info_card = 0;
    }
}

//функция закрытия и открытия окна со специальными картами
var open_close_special_card = 0;
var Open_Special_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_special_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}

var id_card = 0;
//функция добавления карт в руку
var add_card_in_hand = function () {

    //переменная, хранящая указатель на руку
    var hend = document.getElementById("Hend");

    //переменная с картой
    let card = document.createElement("div");
    card.className = "card card_in_hend";

    card.onclick = Open_Info_Card;

    hend.append(card);

    //создание нового окна с действиями карты, которое открывается по нажатии
    // let card_window = document.createElement("div");
    // card_window.className += "card_window";
    // card_window.innerHTML = '<div class="card"></div>\
    // <div class="card_window_buttons">\
    //     <!-- первый ряд кнопок -->\
    //    <div class="line_buttons">\
    //        <form>\
    //            <button type="button">Применить</button>\
    //        </form>\
    //        <form>\
    //             <button type="button">Вызвать</button>\
    //         </form>\
    //    </div>\
    //    <!-- второй ряд кнопок -->\
    //    <div class="line_buttons">\
    //          <form>\
    //              <button type="button">Надеть</button>\
    //          </form>\
    //         <form>\
    //             <button type="button">В инвентарь</button>\
    //         </form>\
    //     </div>\
    //     <!-- третий ряд кнопок -->\
    //     <div class="line_buttons">\
    //         <form>\
    //             <button type="button">Продать</button>\
    //         </form>\
    //         <form>\
    //              <button type="button">Украсть</button>\
    //          </form>\
    //     </div>\
    //     <!-- четвертый ряд кнопок -->\
    //     <div class="line_buttons">\
    //         <form>\
    //             <button type="button">Сбросить</button>\
    //         </form>\
    //         <form>\
    //              <button type="button">Взять в руку</button>\
    //          </form>\
    //     </div>\
    //     <!-- кнопка закрытия -->\
    //     <div class="div_exit_button">\
    //         <form>\
    //             <button type="button" onclick="Open_Info_Card()">Закрыть</button>\
    //         </form>\
    //     </div>\
    // </div>'
    // id_card++;

}

//функция выбрасывания карты
var drop_card_out_hend = function () {

}
//функция взятия карты из колоды дверей
var take_deckcard = function () {
  let deckcard = document.getElementById("treasure_from_deck");
  let hand = document.getElementById("Hend");
  let clone = deckcard.cloneNode(true);
  hand.append(clone);
}
