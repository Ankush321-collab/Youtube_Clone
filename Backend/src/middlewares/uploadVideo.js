const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: 'uploads/videos',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  if (/video\/(mp4|webm|mov|mkv)/.test(file.mimetype)) cb(null, true);
  else cb(new Error('Invalid video type'), false);
};
module.exports = multer({
  storage,
  limits: { fileSize: parseInt(process.env.MAX_VIDEO_MB || '1024') * 1024 * 1024 },
  fileFilter
}).single('video');
