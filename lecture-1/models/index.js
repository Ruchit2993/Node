const { db } = require("../configs/database");
const { User } = require("./userModel");
const { Company } = require("./companyModel");
const { Profile } = require("./profileModel");

User.hasOne(Profile, { as: "profile", foreignKey: "userId" });
Profile.belongsTo(User, { as: "user", foreignKey: "userId" });
Company.hasMany(User, { as: "Users", foreignKey: "companyId" });
User.belongsTo(Company, { as: "companyDetails", foreignKey: "companyId" });

console.log("Company associations :", Object.keys(Company.associations));
console.log("User associations :", Object.keys(User.associations));
console.log("Profile associations :", Object.keys(Profile.associations));

(async () => {
  try {
    await db.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

module.exports = { User, Company, Profile };
