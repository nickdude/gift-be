const Company = require('../models/companyModel');

exports.createCompany = async (companyData) => {
  const company = new Company(companyData);
  return await company.save();
};

exports.getAllCompanies = async () => {
  return await Company.find();
};

exports.getCompanyById = async (id) => {
  return await Company.findById(id);
};

exports.updateCompany = async (id, companyData) => {
  return await Company.findByIdAndUpdate(id, companyData, { new: true });
};

exports.deleteCompany = async (id) => {
  return await Company.findByIdAndDelete(id);
};
