const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, 'nach');
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};



exports.decodeToken = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'nach'); 
    const email = decoded.email;
    const emailExtension = email.split('@')[1].split('.')[0]; 
    req.emailExtension = emailExtension;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};


