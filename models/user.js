var Sequelize = require('sequelize');
module.exports = function(db) {
  return db.define('user', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }
  },{
    indexes:
    [
      {
        unique: true,
        fields: ['email']
      }
    ]
  });
}