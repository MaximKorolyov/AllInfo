const Sequalize = require('sequelize');

const sequalize = new Sequalize('mydb',
 'root', 
 'Qwerty123',
{
 host: '127.0.0.1',
 dialect: 'mysql',
 charset: 'utf8mb4'
}

);

const Users = require('./modules/Users')(sequalize);
// const Roles = require('./modules/Roles')(sequalize);
// const Statuses = require('./modules/Statuses')(sequalize);
// const Notes = require('./modules/Notes')(sequalize);
// const N_Boards = require('./modules/N_Boards')(sequalize);
(async () => {
    try {
      await sequalize.sync({ alter: true });
      console.log('Таблица успешно создана или обновлена');
    } catch (error) {
      console.error('Ошибка при создании таблицы:', error);
    }
  })();


module.exports = {
    sequalize : sequalize, 
    users: Users,
    // roles: Roles,
    // statuses: Statuses,
    // notes: Notes,
    // noteBoards: N_Boards


}