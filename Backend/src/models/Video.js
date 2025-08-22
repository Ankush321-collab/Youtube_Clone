const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  tags: [String],
  fileUrl: String,
  hlsUrl: String,
  thumbnailUrl: String,
  durationSeconds: Number,
  views: { type: Number, default: 0 },
  isPublic: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model('Video', videoSchema);
