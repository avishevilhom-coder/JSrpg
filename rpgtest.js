const ps = require("prompt-sync");
const prompt = ps();
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function saveprogres (player) {
  if(!player || !player.name){
    console.log("Нет информаци");
    return;
  }
}
let player =  {
    name: "",
    city: "",
    class: ""

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
                stats = {
                    className: "Лучник",
                    hp: 70,
                    damage: 30,
                    armor: 3,
                    mana: 50,
                    weapon: "Лук",
                    lvl: 1
                };
                break;
            case 2:
                console.log("Хороший выбор дорогой друг будешь самым лучшим магом");
                stats = {
                    className: "Лучник",
                    hp: 50,
                    damage: 45,
                    armor: 2,
                    mana: 100,
                    weapon: "ЖезолАлександра 1",
                    lvl: 1
                };
                break;
            case 3:
                console.log("Хороший выбор дорогой друг будешь самым лучшим Воином")
                stats = {
                    className: "Лучник",
                    hp: 125,
                    damage: 25,
                    armor: 8,
                    mana: 30,
                    weapon: "Секира",
                    lvl: 1
                };
                break;
            default:
                console.log("Введите от 1 до 3");
                break;
        }
        Nextstap();
    });
}
function Nextstap(){
    console.log("Хоршо дорогой " +stats.className + " Чем тут будешь заниматься");
    rl.question ("Можешь отправиться в лес , в горы , или хочешь сохраниться\n1.Лес\n2.Горы\n3.Сохранение ",(Nextstapchar)=>{
        const choise = Number(Nextstapchar);
    switch(choise){
        case 1: 
        console.log("Хорошо вот эта тропинка ведет в лес удачи тебе ",stats.className);
        break;
        case 2:
            console.log("Хорошо вот эта тропинка ведет в горы удачи тебе ",stats.className);
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