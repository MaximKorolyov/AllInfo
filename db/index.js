const Sequalize = require('sequelize');

const sequalize = new Sequalize('std_2068_allinfo',
 'std_2068_allinfo', 
 'Qwerty123',
{
 host: 'std-mysql.ist.mospolytech.ru',
 dialect: 'mysql',
 charset: 'utf8mb4'
});

const Users = require('./modules/Users')(sequalize);
const Roles = require('./modules/Roles')(sequalize);
const Statuses = require('./modules/Statuses')(sequalize);
const Notes = require('./modules/Notes')(sequalize);
const N_Boards = require('./modules/N_Boards')(sequalize);


module.exports = {
    sequalize : sequalize, 
    users: Users,
    roles: Roles,
    statuses: Statuses,
    notes: Notes,
    noteBoards: N_Boards


}