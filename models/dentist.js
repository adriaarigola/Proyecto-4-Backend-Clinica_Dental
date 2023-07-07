'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Doctor {0..n}-{One..n} Appointment
      Dentist.hasOne(models.Appointment, {
        as: "appointment",
        foreignKey: "id_dentist", // foreignKey en Appointment
      });
      // Dentist--(One-To-One)--User
      Dentist.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user",
      });
    }
  }

  Dentist.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
    sequelize,
    modelName: 'Dentist',
    tableName: "dentists"
  });
  return Dentist;
};