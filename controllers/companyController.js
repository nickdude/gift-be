const companyService = require('../services/companyService');

exports.createCompany = async (req, res) => {
  try {
    const companyData = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      contact: req.body.contact,
      companyExtension: req.body.companyExtension
    };
    const company = await companyService.createCompany(companyData);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await companyService.getAllCompanies();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await companyService.getCompanyById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const companyData = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      contact: req.body.contact,
      companyExtension: req.body.companyExtension
    };
    const company = await companyService.updateCompany(req.params.id, companyData);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await companyService.deleteCompany(req.params.id);
    if(company){
        res.status(200).json(company);
    }else{
        res.status(204).send();
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
