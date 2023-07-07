const { User, Patient } = require("../../models");

module.exports = async (req, res) => {
    let { page } = req.query;
    page = +page;
    const LIMIT = 3;
    const maxPatients = await Patient.count();
    const maxPages = Math.ceil(maxPatients / LIMIT);
    if (!page || page < 0) page = 1;
    try {
        if (page <= maxPages) {
            const patients = await Patient.findAll({
                limit: LIMIT,
                offset: (page - 1) * LIMIT,
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: {
                            exclude: ["id", "password", "id_role", "createdAt", "updatedAt"],
                        },
                    },
                ],
            });
            res.status(200).json({
                info: {
                    count: maxPatients,
                    page,
                    pages: maxPages,
                },
                results: {
                    patients,
                },
            });
        } else {
            res.json("Nothing here");
        }
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.user.GETALL,
        });
    }
};