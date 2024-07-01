const db = require('../db/index');
const Users = db.users;





async function insertData(login, passwd) {    //функция создания 
    const user = await Users.create({ login: login, pass: passwd});
    console.log("Создан объект! Название объекта:", user.login);
}


async function selectRegions(login, passwd) {                //Вывод регионов
    const user = await Users.findOne({ where: { login: login, pass: passwd } });
    if (user) {
        return true;
    } else {
        return false;
    }
}
  


module.exports = {insertData, selectRegions}