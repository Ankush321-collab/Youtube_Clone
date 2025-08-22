const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, minlength: 3, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  avatarUrl: String,
  watchHistory: [{
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
    watchedAt: Date,
    progressSeconds: Number
  }],
  watchLater: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
