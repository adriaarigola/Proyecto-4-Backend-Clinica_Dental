const { User, Role, Patient } = require("../../models");

module.exports = async (req, res) => {
    const { userId } = req;
    try {
        const user = await User.findOne({
            where: { id: userId },
            attributes: {
                exclude: ["id_role", "createdAt", "updatedAt"],
            },
            include: [
                {
                    model: Role,
                    as: "role",
                    attributes: { exclude: ["id", "createdAt", "updatedAt"] },
                },
                {
                    model: Patient,
                    as: "patient",
                    attributes: { exclude: ["id_user", "createdAt", "updatedAt"] },
                },
            ],
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};