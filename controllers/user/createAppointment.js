const { Appointment, Patient } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
    const { userId } = req;

    try {
        const patient = await Patient.findOne({ where: { id_user: userId } });
        const createAppointment = { ...req.body, id_patient: patient.id };

        await Appointment.create(createAppointment);
        res.status(200).json({
            message: successMsg.appointment.CREATE,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.appointment.CREATE,
        });
    }
};