const Admin = require('../models/adminModel');

exports.registerAdmin = async (adminData) => {
  const admin = new Admin(adminData);
  return await admin.save();
};
