const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: 'uploads/avatars',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  if (/image\/(jpeg|png|webp)/.test(file.mimetype)) cb(null, true);
  else cb(new Error('Invalid avatar type'), false);
};
module.exports = multer({
  storage,
  limits: { fileSize: parseInt(process.env.MAX_AVATAR_MB || '5') * 1024 * 1024 },
  fileFilter
}).single('avatar');
