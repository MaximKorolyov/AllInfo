const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Users', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        login: {
            type: Sequalize.STRING(255),
        },
        pass: {
            type: Sequalize.STRING(255),
        }
    }, {
        timestamps: false,
        tableName: 'Users'
    });
}