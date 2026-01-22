const fs = require('fs');
const saveModule = require('./save.js');

function saveprogres (player) {

  if(!player || !player.name){
    console.log("Нет информации о персонаже");
    return;
  }


  try {
  const playerText = JSON.stringify(player, null, 2)
  fs.writeFileSync('save.txt', playerText)
  console.log("Прогресс успешно сохранен");   
  }
  catch (error) {
    console.log("Ошибка сохранения " + error.message);
  }


}
module.exports = { saveprogres };
const { saveprogres } = require('./save.js');



