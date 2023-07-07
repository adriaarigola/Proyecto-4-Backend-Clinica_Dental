const { User } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
    let { page } = req.query;

    page = +page;
    if (!page || page < 0) page = 1;

    const LIMIT = 3;
    const maxPatients = await User.count();
    const maxPages = Math.ceil(maxPatients / LIMIT);

    if (page > maxPages) {
        return res.status(404).json({
            status: "Error",
            message: errorMsg.pagination.SURPASS,
        });
    }
    try {
        const patients = await User.findAll({
            where: { id_role: 2 },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.user.GETALL,
        });
    }
};