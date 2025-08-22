const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);
module.exports = function makeThumbnail(inputPath, outputPath, cb) {
  ffmpeg(inputPath)
    .screenshots({
      timestamps: ['50%'],
      filename: outputPath,
      folder: 'uploads/thumbnails',
      size: '320x180'
    })
    .on('end', () => cb(null, outputPath))
    .on('error', cb)
    .run();
};
