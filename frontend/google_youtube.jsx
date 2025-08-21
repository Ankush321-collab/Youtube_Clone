
import React, { useEffect } from "react";

export default function YouTubeVideos({ videos, onVideoClick }) {
  return (
    <div className="p-4 bg-[#181818] min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="rounded-xl overflow-hidden bg-[#232323] shadow-lg cursor-pointer group relative transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl border border-transparent hover:border-blue-600"
            onClick={() => onVideoClick(video)}
          >
            <div className="relative">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full aspect-video object-cover"
              />
              {/* Duration overlay (dummy for now) */}
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md font-semibold">9:57</span>
            </div>
            <div className="flex gap-3 items-start px-3 py-3">
              {/* Channel avatar (placeholder) */}
              <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg">
                {video.snippet.channelTitle[0]}
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-base text-white truncate group-hover:text-blue-400 transition-colors duration-200">{video.snippet.title}</h3>
                <span className="text-gray-300 text-xs mt-1">{video.snippet.channelTitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
