const { Appointment } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        const update = { ...req.body };

        await Appointment.update(update, { where: { id: id } });
        res.status(200).json({
            message: successMsg.appointment.UPDATE,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.appointment.UPDATE,
        });
    }
};