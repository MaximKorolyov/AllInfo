const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Statuses', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        s_name: {
            type: Sequalize.STRING(255),
        }
    }, {
        timestamps: false,
        tableName: 'Statuses'
    });
}