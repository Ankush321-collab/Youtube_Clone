const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
