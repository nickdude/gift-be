const User = require('../models/userModel');

exports.registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
