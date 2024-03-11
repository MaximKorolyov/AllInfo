const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Notes', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        n_title: {
            type: Sequalize.STRING(255),
        },
        n_note: {
            type: Sequalize.STRING(255),
        },
        n_deadline: {
            type: Sequalize.DATE(),
        },
        n_status: {
            type: Sequalize.INTEGER(),
        },
        n_board: {
            type: Sequalize.INTEGER(),
        },
    }, {
        timestamps: false,
        tableName: 'Notes'
    });
}