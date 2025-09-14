const { User } = require("../models/userModel");
const { Company } = require("../models/companyModel");
const { success, error } = require('../utils/responseUtil')

function getAllUsers(req, res) {
  return success(res, null, "All user data Retrived sucessfully ...")
}

function registerUser(req, res) {
  console.log(req.body);

  const { userName, userEmail, userId } = req.body;

  console.log(
    `Regitering user with user name ${userName} userEmail ${userEmail} and his user id is ${userId}`
  );

  return success(res, {
    userId: userId,
    userName: userName,
    userEmail: userEmail,
  }, "User Created sucessfully ...")
}

const getUserWithCompany = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Company,
          as: "companyDetails",
        },
      ],
    });
    if (!user) {
      return error(res, "User not found", 404)
    }
    success(res, user)
  } catch (err) {
    error(res, err.message, 500)
  }
}


module.exports = { getAllUsers, registerUser, getUserWithCompany };
