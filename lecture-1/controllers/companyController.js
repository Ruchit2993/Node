const { Company, User } = require("../models/index.js");
const { success, error } = require('../utils/responseUtil')

const getCompanyWithUsers = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findOne({
      where: { id: companyId },
      include: [
        {
          model: User,
          as: "Users",
        },
      ],
    });
    if (!company) {
      return error(res, "Company not found", 404)
    }
    success(res, company)
  } catch (err) {
    error(res, err.message, 500)
  }
}

module.exports = {
  getCompanyWithUsers,
};
