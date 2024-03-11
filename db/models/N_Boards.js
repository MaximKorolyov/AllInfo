const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Note_Boards', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        b_name: {
            type: Sequalize.STRING(255),
        },
        b_desc: {
            type: Sequalize.STRING(255),
        },
        owner: {
            type: Sequalize.INTEGER(),
        }
    }, {
        timestamps: false,
        tableName: 'Note_Boards'
    });
}