var Sequelize = require('sequelize');
module.exports = function(db) {
  return db.define('vote', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    value: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  })
}