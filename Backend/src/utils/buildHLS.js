const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);
module.exports = function buildHLS(inputPath, outputDir, cb) {
  ffmpeg(inputPath)
    .outputOptions([
      '-profile:v baseline',
      '-level 3.0',
      '-start_number 0',
      '-hls_time 10',
      '-hls_list_size 0',
      '-f hls'
    ])
    .output(`${outputDir}/index.m3u8`)
    .on('end', () => cb(null, `${outputDir}/index.m3u8`))
    .on('error', cb)
    .run();
};
