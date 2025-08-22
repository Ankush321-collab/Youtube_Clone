const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  downloadedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('DownloadLog', logSchema);
