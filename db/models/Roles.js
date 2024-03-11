const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Roles', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        Role_name: {
            type: Sequalize.STRING(255),
        }
    }, {
        timestamps: false,
        tableName: 'Roles'
    });
}