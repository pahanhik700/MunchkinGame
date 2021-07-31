var classes = [["Вор", "Подрезка: можешь скинуть карту, чтобы подрезать д…вместно валят монстра, можешь подрезать их обоих.", "Кража: можешь скинуть  карту, что бы попытаться с… кража, иначе тебя лупят, и ты теряешь 1 Уровень."],
["Волшебник", "Заклинание Полета: можешь сбросить до 3 карт в процесс Смывки; каждая дает +1 Бонус на бегство.", "Заклинание Усмирения: сбросишь всю \"руку\" - усмир…частвуют другие монстры, с ними придётся воевать."],
["Клирик", "Изгнанеие: можешь сбросить до 3 карт в бою против Андедов.", "Каждый сброс дает тебе +3 бонус."],
["Воин", "Буйство: можешь сбросить до 3 карт в бою, каждая сброшенная карта даст тебе +1 Бонус.", "При ничьей в бою ты побеждаешь."]];
var curses = [["Уровень!", "Потеря 1 Уровня!"],
["Кривящее зеркало", "В следующем бою ты не получаешь бонусы от оружия.…ь Снятия проклятия до следующего боя, оно спадет."],
["Налоги", "Сбрось одну шмотку на свой вкус. Каждый игрок дол…латы налогов, они теряют все их шмотки и Уровень."],
["Броник", "Теряешь надетый Броник"],
["Потеря Двух Карт", "Игрок слева от тебя берет карту из твоей \"руки\" и…бе. Затем тоже самое делает игрок справа от тебя."],
["Головняк", "Теряешь надетый Головняк"],
["Изгнание из Класса", "Сбрось классовую карту, если есть такая. Если у т…сс сбросить. Если классов нет, теряешь 1 уровень."],
["Смена класса", "Без класса проклятие не действует. Иначе начинай …осе нет класса, ты просто теряешь класс (классы)."],
["Утрата 1 маленькой шмотки", "Выбери одну маленькую шмотку для сброса."],
["Потеря 1 большой шмотки", "Выбери большую шмотку для сброса."],
["В конец мерзкое", "Теряешь шмотку, которая дает самый большой бонус."],
["Утка Обреченности", "\"Будешь знать, как всяких уток в подемельях подбирать.\" Теряешь 2 Уроня."],
["Утрарата Расы", "Сбрось свои Расовые карт, находяшиеся в игре. Стань уже человеком."],
["Проклятие", "Теряешь надетую Обувку."],
["Смена Расы", "Если нет расы,то проклятие не действует. В против… становится твоей, если рас нет, то теряешь свою."]];
var items = [["+1 к смывке", "(для всех)", "Чарующая Дуда", "1 Рука Большая 300 голд"],
["+2 Бонус", "(для всех)", "Паленые Доспехи", "Броник 400 голд"],
["+3 Бонус", "(для всех)", "Реально Конкретный Титул", "Нет цены"],
["+3 Бонус", "(все кроме Волшебника)", "Мифрильные Доспехи", "Броник Большая 600 голд"],
["+4 Бонус", "(только человек)", "Швейцарская Армейская Алебарда", "2 Руки Большая 600 голд"],
["+3 Бонус", "(только Эльф)", "Рапира Такнечестности", "1 Рука 600 голд"],
["+3 Бонус", "(только Волшебник)", "Пойнтовая Шляпа", "головняк 400 голд"],
["+3 Бонус", "(только Хафлинг)", "Сэндвич Запоздалого Прозрения с сыром и селедкой", "400 голд"],
["+4 Бонус", "(только Дварф)", "Коленеотбойный Молоточек", "1 рука 600 голд"],
["+2 Бонус", "(все кроме Вора)", "Мея Песни и Пляски", "400 голд"],
["Проклятия с дверей не имеют силы.", "(для всех)", "Сандалеты-протекторы", "Обувка 700 голд"],
["+1 Бонус", "(для всех)", "Острые Коленки", "200 голд"],
["+2 Бонус", "(для всех)", "Бонус Коварного Бастарда", "1 Рука 400 голд"],
["+4 Бонус", "(только Эльф)", "Лучок С Ленточками", "2 Руки 800 голд"],
["+1 Бонус", "(для всех)", "Склизкие Доспехи", "Броник 200 голд"],
["+4 Бонус", "(только Вор)", "Плащ Замутнения", "600 голд"],
["+3 Бонус", "(для всех)", "Огромная Каменюга", "2 Руки Больша Нет цены"],
["+3 Бонус", "(только Хафлинг)", "Боевая стремянка", "Большая 400 голд"],
["Без Бонуса", "Крыска на палочке", "Сбрось карту чтобы смыться от любого монстра 8-го уровня или ниже.", "1 Рука Нет цены"],
["+3 Бонус", "(только Человек)", "Небоись-Бандана", "Головняк 400 голд"],
["+2 Бонус", "(для всех)", "Пафосный Баклер", "1 Рука 400 голд"],
["+3 Бонус", "(все кроме Воин)", "Колготки Великанской Силы", "600 голд"],
["+4 Бонус", "(только Воин)", "Вездешний Щит", "1 Рука Большой 600 голд"],
["+3 Бонус", "(только Дварф)", "Доспехи Поперек-Себя-Шире", "Броник 400 голд"],
["+2 Бонус", "(для всех)", "Башмаки Могучего Пенделя", "Обувка 400 голд"],
["+3 Бонус", "(только Вор)", "Кинжал Измены", "1 Рука 400 голд"],
["+3 Бонус", "(только Клирик)", "Тёрка Умиротворения", "1 Рука 400 голд"],
["+1 Бонус(+3 для Эльфов)", "(для всех)", "Шлем-Рогач", "головняк 600 голд"],
["+2 к смывке", "(для всех)", "Башмаки Реально Быстрого Бега", "Обувка 400 голд"],
["+1 Бонус", "(для всех)", "Одиннадцатифутовый Кий", "2 руки 200 голд"],
["+4 Бонус", "(для всех)", "Колотушка Резкости", "1 Рука 600 голд"],
["+5 Бонус", "(только Волшебник)", "Посох Напалма", "1 Рука 800 голд"],
["+3 бонус", "(для всех)", "Бензопила Кровавого Расчленения", "2 Руки Большая 600 голд"],
["+1 бонус", "(для всех)", "Кожаный Прикид", "Броник 200 голд"],
["+1 бонус", "(для всех)", "Шлем Бесстрашия", "Головняк 200 голд"]]
var races = [["Хафлинг", "-1 к Смывке", "На каждом ходу можешь продать одну шмотку за двойную цену(цена других шмоток не меняется)."],
["Дварф", "Может носить 2 большие шмотки", "Можешь надедь любое число Больших мшоток. Максимум 6 карт на руке"],
["Эльф", "+1 к Смывке", "Поднимаешься на 1 Уровень за каждого монстра, которого помогаешь убить"]];
var spells = [["Радиоактивноэлектрокислотное Зелье", "+5 любой стороне.", "200 голд"],
["Заклинание Непонятных Правил", "Получи Уровень!", "Нет цены"],
["Расчет Наемника", "Сбросьте Наемника. Получи Уровень!", "Нет цены"],
["Стенка-встанька", "Позволяет смыться из любого боя одному или двум персонажам", "300 голд"],
["Хотельное кольцо", "Снимает любое Проклятие.", "500 голд"],
["Уровенный Вор", "Воровство одного уровня у игрока по выбору", "Нет цены"],
["Наемничек", "Позволяет носить и применять ещё одну Большую шмотку.", "Нет цены"],
["Сломленный мастер", "Получи Уровень!Нет цены"],
["Стакан Яппи", "+2 каждому Эльфу в бою", "100 голд"],
["Зелье Жгучего Яда", "+3 любой стороне", "100 голд"],
["Зелье Крутизны", "Получи Уровень!", "Нет цены"],
["Дупельгангер", "Удваивает силу(только когда один)", "300 голд"],
["Тюбик клея", "Применить, когда кто-то смывается из боя. Это игрок долже делать бросок на Смывку повторно.", "100 голд"],
["Питье Противно-Спортивное", "+2 любой стороне", "200 голд"],
["Зелье Попуморфа", "Превращает одного любого монстрва в попугая, который улетает оставляя свои сокровища.", "Нет цены"],
["Утилизация трупов. Применяется только после боя.", "Получи Уровень!", "Нет цены"],
["Зелье Идиотской Храбрости", "+2 любой стороне", "100 голд"],
["Ура, клад!", "Сразу возьми три карты сокровища. Если эту карту …и положенные карты, в противном случае открой их.", "Нет цены"],
["1000 Голдов", "Получи Уровень!", "Нет цены"],
["Зелье Ротовой Вони", "+2 лбой стороне или мгновенное уничтожение Сопливого Носа.", "100 голд"],
["Хотельное Кольцо", "Снимает любое Проклятие. применить в любое время.", "500 голд"],
["Кульная Ошибка при Сложении", "Получи Уровень!", "Нет цены"],
["Зелье Холодильного Взрыва", "+3 любой стороне", "100 голд"],
["Зелье Невидимости", "Применяется при провале броска бегстваю", "200 голд"],
["Пелье Зутаницы", "+3 любой стороне.", "100 голд"],
["Муравьиный Геноцид", "Получи Уровень!", "Нет цены"],
["Штырь Лозоходца", "Отыщи в сбросе любую нужную карту.", "1100 голд"],
["Зелье Дружбы", "Выбрось всех монстров из боя. Сокровищ никто не получает.", "200 голд"],
["Спячечное Зелье", "+2 любой стороне.", "100 голд"],
["Читерский Кубик", "Играй после своего броска кубика. Поверни кубик нужной цифрой вверх. Это результат твоего броска.", "300 голд"],
["Подкормленный Мастер", "Получи уровень!", "Нет цены"],
["Зелье Стрелочника", "Одноразовое. Любой игрок(по выбору) бьётся с монс…и может почистить нычки независимо от исхода боя.", "300 голд"],
["Клевые Шарики", "+5 любой стороне. Применяется один раз.", "Нет цены"],
["Мэджик Мисаил!", "Дает +5 любой стороне. Применить только один раз.", "300 Голд"]];
var monsters = [["уровень 2", "Бешеная Цыпа", "+3 против Хафлинг", "непотребство: теряешь 1 уровень", "0 уровень", "1 сокровище"],
["уровень 1", "калечный гоблин", "+1 к смывке", "непотребство: теряешь 1 уровень", "0 уровень", "1 сокровище"],
["уровень 2", "Лятучие Лягушки", "+1 к смывке", "непотребство: теряешь 2 уровня", "0 уровень", "1 сокровища"],
["уровень 12", "вампир", "не атакует клирика", "непотребство: теряешь 3 уровня", "0 уровень", "3 сокровища"],
["уровень 16", "Гиппогриф", "не преследует всех ниже 4 уровня", "непотребство: теряешь все шмотки", "2 уровень", "4 сокровища"],
["уровень 6", "Адвокат", "Не атакует вора", "непотребство: каждый игрок вытягивает у тебя по карте", "0 уровень", "2 сокровища"],
["уровень 1", "Вошки", "Без смывки", "непотребство: сбрось броник и обувку", "0 уровень", "1 сокровище"],
["Уровень 1", "Пасюк с Кувалдой", "+3 против Клириков", "непотребство: теряешь 1 уровень", "0 уровень", "1 сокровище"],
["уровень 4", "Лепрокон", "+5 против Эльфов", "непотребство: теряешь 2 шмотки", "0 уровень", "2 сокровища"],
["уровень 4", "Гарпистки", "+5 против волшебников", "непотребство: теряешь 2 уровня", "0 уровень", "2 сокровища"],
["уровень 8", "Газебо", "никто не поможет. Бой 1 на 1.", "непотребство: теряешь 3 уровня", "0 уровень", "2 сокровища"],
["Уровень 2", "Октаэдр", "+1 к смывке", "непотребство: если смыться не получилось, сбрасывай все большие шмотки.", "0 уровень", "1 сокровище"],
["Уровень 16", "Король Тут", "не преследует тех, кто ниже 4 уровня. Остальные теряют 2 уровня, даже если смываются.", "Непотребство: теряешь все шмотки и все карты с руки", "2 уровня", "4 сокровища"],
["Уровень 14", "Неописуемый Ужас", "+4 против воинов.", "Непотребство: Невыразимо жуткая смерть для всех, …уемо теряет силу - сбрось карту Волшебника. Ужас!", "0 уровень", "4 сокровища"],
["Уровень 4", "Наскипидаренные улитки", "-2 к смывке.", "Непотребство: Они тырят у тебя шмотки. Брось куби…бо шмоток , либо карт из \"руки\" - выбор за тобой.", "0 уровень", "2 сокровища"],
["Уровень 8", "Лицесос", "Какая гадость! +6 против Эльфов.", "Непотребство: когда он ссасывает с тебя лицо, он …Сбрось все надетые Головняки и потеряй 1 уровень.", "0 уровень", "2 сокровища"],
["Уровень 10", "Просто Тролль", "У него нет особых способностей, и это просто сводит его с ума.", "Непотребство: тупо насилует игровое равновесие, р…о уровня взять у тебя по одной шмотке на их вкус.", "0 уровень", "3 сокровища"],
["Уровень 18", "Бульрог", "Не преследует никого, чей уровень ниже 5.", "Непотребство: застегали тебя до смерти.", "2 Уровня", "5 сокровищ"],
["Уровень 10", "3872 Орка", "+6 против Дварфов из-за старинных обид.", "Непотребство: брось кубик. На 1 или 2 они затапты…х теряешь столько уровней, сколько показал кубик.", "0 уровень", "3 сокровища"],
["Уровень 18", "Кальмадзилла", "Склизко! Эльфы в -4! Не преследует никого, чей уровень ниже 5, за исключением Эльфов.", "Непотребство: хватает, сдавливает противными щупа…цами и пожирает. Вопросы, пожелания, высказывания", "2 уровня", "4 сокровища"]];


//функция закрытия и открытия информации о карте
var open_close_info_card = 0;
var card_in_h;

var Open_Info_Card = function() {
    let Window_info_card = document.querySelector(".card_window");

    if(open_close_info_card == 0) {
        Window_info_card.style.display = "block";
        open_close_info_card = 1;
        let search = document.getElementById('window_card');
        let first = search.firstChild;
        let new_el = document.createElement('div');
        new_el.className = "card";
        let hand = document.getElementById('Hend');
        hand.onclick = function(e){
            new_el.innerHTML = e.target.innerHTML;
            card_in_h = e.target;
        }
        search.insertBefore(new_el, first);
    }
    else {
        Window_info_card.style.display = "none";
        open_close_info_card = 0;
        let search = document.getElementById('window_card');
        let first = search.firstChild;
        first.remove();
    }
}

//функция закрытия и открытия окна со специальными картами
var open_close_special_card = 0;
var Open_Special_Race_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_race_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}

var Open_Special_Class_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_class_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}

var Open_Special_Clothes_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_clothes_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}

var Open_Special_Inventory_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_inventory_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}

var Open_Special_Curse_Card = function() {
    let Window_Special_Card = document.querySelector(".window_player_curse_card");
    if(open_close_special_card == 0) {
        Window_Special_Card.style.display = "block";
        open_close_special_card = 1;
    }
    else {
        Window_Special_Card.style.display = "none";
        open_close_special_card = 0;
    }
}


var card;

var doors = document.getElementById("doors");
var treasure = document.getElementById("treasures");

doors.onclick = function (){
    let tmp = dungeon[dungeon.length - 1];
    dungeon.pop();
    if (tmp.constructor.name === "Enemy"){
        card.id = "enemy";
    }
    else if(tmp.constructor.name === "Curse"){
        card.id = "curse";
    }
    else if(tmp.constructor.name === "Race"){
        card.id = "race";
    }
    else if(tmp.constructor.name === "Class"){
        card.id = "clas";
    }

    for (let k in tmp){
        card.innerHTML += tmp[k] + '<br>';
    }

}

treasure.onclick = function() {
    let tmp = treasures[treasures.length - 1];
    treasures.pop();
    if (tmp.constructor.name === "Spells"){
        card.id = "spell";
    }
    else if(tmp.constructor.name === "Items"){
        card.id = "item";
    }
    for (let k in tmp){
        card.innerHTML += tmp[k] + '<br>';
    }
}

//функция добавления карт в руку
var add_card_in_hand = function () {

    //переменная, хранящая указатель на руку
    let hend = document.getElementById("Hend");

    //переменная с картой
    card = document.createElement("div");
    card.className = "card card_in_hend";

    card.onclick = Open_Info_Card;
    hend.append(card);
}


var drops_cards = [];
//функция выбрасывания карты
var drop_card_out_hand = function () {
    let drop = document.getElementById('drop_doors');
    let treas = document.getElementById("drop_treasures");
    if (card_in_h.id === "enemy" || card_in_h.id === "curse" || card_in_h.id === "clas" || card_in_h.id === "race")
        drop.innerHTML = card_in_h.innerHTML;
    else if (card_in_h.id === "item" || card_in_h.id === "spell")
        treas.innerHTML = card_in_h.innerHTML;
    drops_cards.push(card_in_h)
    card_in_h.remove();
}

var clothes = function() {
    if (card_in_h.id === "item"){
        let it = document.getElementById("item_card");
        it.innerHTML = card_in_h.innerHTML;
        card_in_h.remove();
    }
}

var race = function() {
    if (card_in_h.id === "race"){
        let it = document.getElementById("race_card");
        it.innerHTML = card_in_h.innerHTML;
        card_in_h.remove();
    }
}

var class_player = function() {
    if (card_in_h.id === "clas"){
        let it = document.getElementById("class_card");
        it.innerHTML = card_in_h.innerHTML;
        card_in_h.remove();
    }
}

var curse = function() {
    if (card_in_h.id === "curse"){
        let it = document.getElementById("curse_card");
        it.innerHTML = card_in_h.innerHTML;
        card_in_h.remove();
    }
}

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
    document.getElementById("Nickname").innerHTML = this.name;
}
ClassAdd(NewClass) {

}
ItemsAdd() {

}
InventoryAdd() {

}
CursesAdd() {

}
}

class Enemy {
    constructor(level, name, img, buff, obscenity, level_person, treacyres){
        this.level = level;
        this.name = name;
        this.img = img;
        this.buff = buff;
        this.obscenity = obscenity;
        this.level_person = level_person;
        this.treacyres = treacyres;
    }
}

class Race {
    constructor(name, img, buff, description){
        this.name = name;
        this.img = img;
        this.buff = buff;
        this.description = description;
    }
}

class Class {
    constructor(name, img, ability1, ability2){
        this.name = name;
        this.img = img;
        this.ability1 = ability1;
        this.ability2 = ability2;
    }
}

class Curse {
    constructor(name, img, description){
        this.name = name;
        this.img = img;
        this.description = description;
    }
}

class Spell {
    constructor(name, img, buff, description){
        this.name = name;
        this.img = img;
        this.buff = buff;
        this.description = description;
    }
}

class Items {
    constructor(bonus, person, img, description, money){
        this.bonus = bonus;
        this.person = person;
        this.img = img;
        this.description = description;
        this.money = money;
    }
}

class Person {
    constructor() {}
    level_up() {
        document.getElementById("id1").innerHTML += "1";
    }
}

// заполнения колод картами и из массивов и добавление к ним картинок
var dungeon = [];
var treasures = [];

function compareRandom(a, b) {
    return Math.random() - 0.5;
    }

function Deck(){
for (let i = 0; i < monsters.length; i++){
    let tmp = new Enemy(monsters[i][0], monsters[i][1], '<img id="img_1" src="assets/media/monster.png">', monsters[i][2], monsters[i][3], monsters[i][4], monsters[i][5]);
    dungeon.push(tmp);
}

for (let i = 0; i < spells.length; i++){
    let tmp = new Spell(spells[i][0], '<img id="img_1" src="assets/media/spell.jpg">', spells[i][1], spells[i][2]);
    treasures.push(tmp);
}

for (let i = 0; i < races.length; i++){
    let tmp;
    if (races[i][0] === "Хафлинг")
        tmp = new Race(races[i][0], '<img id="img_1" src="assets/media/Hafl.png">', races[i][1], races[i][2]);
    else if (races[i][0] === "Дварф")
        tmp = new Race(races[i][0], '<img id="img_1" src="assets/media/Dwarf.png">', races[i][1], races[i][2]);
    else{
        tmp = new Race(races[i][0], '<img id="img_1" src="assets/media/Elph.png">', races[i][1], races[i][2]);
    }
    dungeon.push(tmp);
}

for (let i = 0; i < curses.length; i++){
    let tmp = new Curse(curses[i][0], '<img id="img_1" src="assets/media/curse.png">', curses[i][1]);
    dungeon.push(tmp);
}

for (let i = 0; i < classes.length; i++){
    let tmp;
    if (classes[i][0] === "Воин")
        tmp = new Class(classes[i][0], '<img id="img_1" src="assets/media/Warrior.jpg">', classes[i][1], classes[i][2]);
    else if (classes[i][0] === "Волшебник")
        tmp = new Class(classes[i][0], '<img id="img_1" src="assets/media/Wizard.png">', classes[i][1], classes[i][2]);
    else if (classes[i][0] === "Клирик")
        tmp = new Class(classes[i][0], '<img id="img_1" src="assets/media/Cleric.png">', classes[i][1], classes[i][2]);
    else if (classes[i][0] === "Вор")
        tmp = new Class(classes[i][0], '<img id="img_1" src="assets/media/Theif.png">', classes[i][1], classes[i][2]);
    dungeon.push(tmp);
}
for (let i = 0; i < items.length; i++){
    let tmp = new Items(items[i][0], items[i][1], '<img id="img_1" src="assets/media/items.png">', items[i][2], items[i][3]);
    treasures.push(tmp);
}
treasures.sort(compareRandom);
dungeon.sort(compareRandom);
}
Deck();
console.log(dungeon);
console.log(treasures);

//тестовый игрок
var FPlayer = new Player("Pavel", 1, 1, 0, "human");
FPlayer.NameChange();
FPlayer.LevelChange();
FPlayer.PowerChange();
FPlayer.MoneyChange();

//использование карт из инвентаря
