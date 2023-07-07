'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Appointment--(One-To-One)--Dentist
      Appointment.belongsTo(models.Dentist, {
        as: "dentist",
        foreignKey: "id_dentist",
      });
      // Appointment--(One-To-One)--Patient
      Appointment.belongsTo(models.Patient, {
        as: "patient",
        foreignKey: "id_patient",
      });
    }
  }
  Appointment.init({
    id_dentist: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'Appointment',
    tableName: "appointments",
  });
  return Appointment;
};


