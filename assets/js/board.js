
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
