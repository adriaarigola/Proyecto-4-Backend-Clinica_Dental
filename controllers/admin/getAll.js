const { User } = require("../../models");
const { errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
    let { page } = req.query;
    page = +page;
    if (!page || page < 0) page = 1;

    const LIMIT = 3;
    const maxUser = await User.count();
    const maxPages = Math.ceil(maxUser / LIMIT);

    if (page > maxPages) {
        return res.status(404).json({
            status: "Error",
            message: errorMsg.pagination.SURPASS,
        });
    }
    try {
        const users = await User.findAll({
            limit: LIMIT,
            offset: (page - 1) * LIMIT,
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
        res.status(200).json({
            info: {
                count: maxUser,
                page,
                pages: maxPages,
            },
            results: users,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: errorMsg.user.GETALL,
        });
    }
};