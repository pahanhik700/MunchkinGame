/* Dungeon */
var monster = [];
var curse = [];
var coloda = [];


class Enemy {
    constructor(level, name, buff, obscenity, level_person, treacyres){
        this.level = level;
        this.name = name;
        this.buff = buff;
        this.obscenity = obscenity;
        this.level_person = level_person;
        this.treacyres = treacyres;
    }
}

class Race {
    constructor(name, buff, description){
        this.name = name;
        this.buff = buff;
        this.description = description;
    }
}

class Class {
    constructor(name, ability1, ability2){
        this.name = name;
        this.ability1 = ability1;
        this.ability2 = ability2;
    }
}

class Curse {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

class Spell {
    constructor(name, buff, description){
        this.name = name;
        this.buff = buff;
        this.description = description;
    }
}

$(document).ready(function(){
    $.get("assets/text_card/Monsters.txt", function(data) {
        let items = data.split('%');
        for (let i = 0; i < items.length; i++){
            monster.push(items[i].split('?'));
        }
    })
});

$(document).ready(function(){
    $.get("assets/text_card/Curse.txt", function(data) {
        let items = data.split('%');
        for (let i = 0; i < 8; i++){
            curse.push(items[i].split('?'));
        }
    })
});

for (let i = 0; i < 7; i++){
    let q = new Enemy(monster[i][0], monster[i][1], monster[i][2], monster[i][3], monster[i][4], monster[i][5]);
    coloda.push(q);
}
//не видит в массиве monster элементы по индексам, из-за чего не заполняется массив coloda
