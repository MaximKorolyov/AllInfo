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
        },
        email: {
            type: Sequalize.STRING(255),
        },
        role: {
            type: Sequalize.INTEGER(),
        }
    }, {
        timestamps: false,
        tableName: 'Users'
    });
}