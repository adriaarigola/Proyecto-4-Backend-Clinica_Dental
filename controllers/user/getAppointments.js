const { User, Dentist, Role, Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 3;
  const maxAppointments = await Appointment.count();
  const maxPages = Math.ceil(maxAppointments / LIMIT);
  if (!page || page < 0) page = 1;

  const { userId } = req;

  try {
    if (page <= maxPages) {
      
      const patient = await Patient.findOne({
        where: { id_user: userId },
      });

      const appointments = await Appointment.findAll({
        where: { id_patient: patient.id },
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json({
        info: {
          count: maxAppointments,
          page,
          pages: maxPages,
        },
        results: {
          appointments,
        },
      });
    } else {
      res.json("Nothing here");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};