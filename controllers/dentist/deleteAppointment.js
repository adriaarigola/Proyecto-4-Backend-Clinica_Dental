const { Appointment } = require("../../models");

module.exports = async (req, res) => {
    try {
        const { id } = req.body;

        await Appointment.destroy({ where: { id: id } });
        res.status(200).json({
            message: successMsg.appointment.DELETE,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.appointment.DELETE,
        });
    }
};