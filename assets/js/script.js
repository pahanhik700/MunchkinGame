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
class Person {
    constructor() {}
    level_up() {
        document.getElementById("id1").innerHTML += "1";
    }
}

$(document).ready(function(){
    $.get("assets/text_card/Monsters.txt", function(data) {
        let items = data.split('%');
        for (let i = 0; i < 8; i++){
            monster.splice(0, 0, ...monster.splice(-1, 1, items[i].split('?')));
        }
    })
});

for (let i = 0; i < 7; i++){
    let q = new Enemy(monster[i], monster[i], monster[i], monster[i], monster[i], monster[i]);
    coloda.push(q);
}
