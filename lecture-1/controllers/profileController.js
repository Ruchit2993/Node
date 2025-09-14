const { User, Company, Profile } = require("../models");
const { Sequelize } = require("sequelize");
const { success, error } = require('../utils/responseUtil')

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      attributes: [
        "id",
        "bio",
        "userId",
        [Sequelize.col("user.companyDetails.id"), "companyId"],
        [Sequelize.col("user.companyDetails.name"), "companyName"],
        [Sequelize.col("user.companyDetails.location"), "companyLocation"],
      ],
      include: [
        {
          model: User,
          as: "user",
          attributes: [], // attributes already selected at top level
          include: [
            {
              model: Company,
              as: "companyDetails",
              attributes: [], // attributes already selected at top level
            },
          ],
        },
      ],
      raw: true,
    });
    success(res, profiles)
  } catch (err) {
    error(res, err.message, 500)
  }
}

const createProfile = async (req, res) => {
  try {
    const { bio, userId } = req.body;
    const newProfile = await Profile.create({ bio, userId });
    success(res, newProfile, "Profile created successfully")
  } catch (err) {
    error(res, err.message, 500)
  }
}

const seedProfiles = async (req, res) => {
  try {
    await Profile.bulkCreate([
      {
        userId: 1,
        bio: "Full Stack Developer",
        avatarUrl: "https://example.com/avatar1.png",
        socialLinks: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
        createdBy: "system",
        updatedBy: "system",
      },
      {
        userId: 2,
        bio: "UI/UX Designer",
        avatarUrl: "https://example.com/avatar2.png",
        socialLinks: {
          dribbble: "https://dribbble.com/janedoe",
          behance: "https://behance.net/janedoe",
        },
        createdBy: "system",
        updatedBy: "system",
      },
    ]);
    success(res, null, "Profiles seeded successfully")
  } catch (err) {
    error(res, err.message, 500)
  }
}

module.exports = {
  getProfiles,
  createProfile,
  seedProfiles,
};
