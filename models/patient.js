'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Patient {0..n}-{One..n} Appointments
      Patient.hasOne(models.Appointment, {
        as: "appointment",
        foreignKey: "id_patient", // foreignKey en Appointment
      });
      // Patient--(One-To-One)--User
      Patient.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user",
      });

    }
  }
  Patient.init({
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
    tableName: "patients",
  });
  return Patient;
};