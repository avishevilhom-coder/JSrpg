
const ps = require("prompt-sync");
const prompt = ps();
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function ShowPLayer(){
    console.log("Ура ты создал персонажа")
    console.log(`Имя ${player.name}`);
    console.log(`Город ${player.city}`);
    console.log(`Класс ${player.className}`);
    console.log(`Лвл ${player.lvl}`);
    console.log(`Здоровье ${player.hp}`);
    console.log(`Мана ${player.mana}`);
    console.log(`Оружие ${player.weapon}`);
}

let player =  {
    name: "",
    city: "",
    class: "",
    lvl: 1,
    className: "",
    hp: 0,
    damage: 0,
    armor: 0,           
    mana: 0,
    weapon: "",
    lvl: 1


};

function Nachalo() {
    console.log ("Добро пожаловать в мир РПГташкент");
    rl.question("Как же тебя зовут путник? ",function(ans){
        player.name = ans;
        Gorod();
    });
};
function Gorod (){
    console.log("Приятно познакомится "+ player.name);
    rl.question("Откуда ты к нам прибыл дорогой "+ player.name +"\n",function(ans){
    player.city = ans;
    KakoyClass();
    });
    
}


function KakoyClass(){
    console.log("Еще раз приятно познакомится " +player.name +" c "+player.city);
    console.log("Кем же ты хочешь тут быть дорогой "+player.name +"\n1.Лучник\n2.Магом\n3.Воином")
    console.log("У каждого класса есть свои плюшки");
    console.log("Лучник: 70 здоровья, 30 урона ,50 маны, 3 брони");
    console.log("Маг: 50 здоровья, 45 урона ,100 маны, 2 брони");
    console.log("Воин: 125 здоровья, 25 урона ,30 маны, 8 брони");
    rl.question("Твой выбор дорогой друг ",function(ans){
        player.class = ans;
        const choise = parseInt(ans,10);
        player.class = choise;
        switch(choise){
            case 1:
                console.log("Хороший выбор дорогой друг будешь самым лучшим стрелком");
                    player.className = "Лучник",
                    player.hp = 70,
                    player.damage= 30,
                    player.armor = 3,           
                    player.mana = 50,
                    player.weapon = "Лук",
                    player.lvl = 1
                break;
            case 2:
                console.log("Хороший выбор дорогой друг будешь самым лучшим магом");
                    player.className = "Маг",
                    player.hp = 50,
                    player.damage = 45,
                    player.armor = 2,
                    player.mana = 100,
                    player.weapon = "ЖезолАлександра 1",
                    player.lvl = 1
                break;
            case 3:
                console.log("Хороший выбор дорогой друг будешь самым лучшим Воином")
                    player.className = "Воин",
                    player.hp =125,
                    player.damage = 25,
                    player.armor = 8,
                    player.mana = 30,
                    player.weapon = "Секира",
                    player.lvl = 1
                break;
            default:
                console.log("Введите от 1 до 3");
                break;
        }
        ShowPLayer();
        Nextstap();
    });
}

function saveprogres(){
   const dataString = `Имя ${player.name}Город ${player.city} Класс ${player.className} Здоровье ${player.hp} Урон ${player.damage} Броня ${player.armor} Мана ${player.mana} Оружие ${player.weapon} Левол ${player.lvl}`

    fs.writeFile("saverpg.txt", JSON.stringify(dataString),function(error){
        if(error){
            console.log("Ошибка");
            return;
        }
        console.log("Сохранение прошло успешно")
        const read = fs.readFileSync("saverpg.txt");
        console.log("Данные в файле ",read.toString());
        Nextstap();
    });
    
}



function Nextstap(){
    console.log("Хоршо Чем тут будешь заниматься");
    rl.question ("Можешь отправиться в лес , в горы , или хочешь сохраниться\n1.Лес\n2.Горы\n3.Сохранение ",(Nextstapchar)=>{
        const choise = Number(Nextstapchar);
    switch(choise){
        case 1: 
        console.log("Хорошо вот эта тропинка ведет в лес удачи тебе ",player.className);
        break;
        case 2:
            console.log("Хорошо вот эта тропинка ведет в горы удачи тебе ",player.className);
            break;
        case 3: 
        saveprogres();
            break;
        default:
            console.log("От 1 до 3");
            break;
    }
    });
}
Nachalo();
