/* Dungeon */
var monster = [];
var curse = [];
var coloda = [];

class Player {
  constructor(name, level, power, money, race, clas, items, inventory, curses) {
    this.name = name;
    this.level = level;
    this.power = power;
    this.money = money;
    this.race = race;
    this.clas = clas;
    this.items = items;
    this.inventory = inventory;
    this.curses = curses;
  }
  LevelChange() {
    document.getElementById("Level").innerHTML = "Уровень: " + (this.level);
  }
  PowerChange() {
    document.getElementById("Power").innerHTML = "Сила: " + (this.power);
  }
  MoneyChange() {
    document.getElementById("Money").innerHTML = "Голда: " + (this.money);
  }
  NameChange() {
    document.getElementById("NickName").innerHTML = (this.name);
  }
  ClasChange() {

  }
  ItemsChange() {

  }
  InventoryChange() {

  }
  CursesChange() {

  }
}

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
