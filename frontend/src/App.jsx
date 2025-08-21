import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import YouTubeVideos from '../google_youtube.jsx';

const YOUTUBE_API_KEY = "AIzaSyCIMACh4aCADeCeUFCabuqdqW6M11ZcZ3Y";

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("coding tutorials");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    fetchVideos(query);
  }, []);

  const fetchVideos = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=15&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items || []);
      setSelectedVideo(null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // ESC key to exit video page/fullscreen
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
        setFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Fullscreen toggle
  const handleFullscreen = () => setFullscreen((f) => !f);

  // Search handler for Navbar
  const handleSearch = useCallback((searchTerm) => {
    setQuery(searchTerm);
    fetchVideos(searchTerm);
  }, []);

  // Video page layout
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          {!selectedVideo ? (
            <YouTubeVideos videos={videos} onVideoClick={setSelectedVideo} />
          ) : (
            <div className={`flex flex-row w-full h-[80vh] bg-black/95 p-6 gap-6 ${fullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`} style={fullscreen ? {width: '100vw', height: '100vh', left: 0, top: 0} : {}}>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    title={selectedVideo.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg w-full h-full"
                    style={fullscreen ? {width: '100vw', height: '100vh'} : {}}
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 bg-gray-800 text-white rounded px-3 py-1 text-lg hover:bg-gray-600"
                    onClick={() => setSelectedVideo(null)}
                  >
                    &times;
                  </button>
                  <button
                    className="absolute bottom-2 right-2 bg-gray-800 text-white rounded px-3 py-1 text-sm hover:bg-gray-600"
                    onClick={handleFullscreen}
                  >
                    {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>
                </div>
                <h3 className="font-bold text-white text-xl mt-4 mb-2 w-full max-w-3xl truncate">{selectedVideo.snippet.title}</h3>
                <p className="text-gray-300 text-md mb-2 w-full max-w-3xl">{selectedVideo.snippet.channelTitle}</p>
                <p className="text-gray-400 text-xs w-full max-w-3xl">{selectedVideo.snippet.description}</p>
              </div>
              {/* Sidebar videos */}
              <div className="w-[350px] overflow-y-auto h-full bg-black/80 rounded-lg p-2">
                <h4 className="text-white font-semibold mb-2">Up Next</h4>
                <div className="flex flex-col gap-2">
                  {videos.filter(v => v.id.videoId !== selectedVideo.id.videoId).map((video) => (
                    <div
                      key={video.id.videoId}
                      className="flex gap-2 items-center cursor-pointer hover:bg-blue-700 rounded p-2 transition-colors duration-200"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <img
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title}
                        className="rounded w-[120px] h-[70px] object-cover"
                      />
                      <div className="flex flex-col flex-1">
                        <span className="text-white font-bold text-sm truncate group-hover:text-blue-400">{video.snippet.title}</span>
                        <span className="text-gray-300 text-xs">{video.snippet.channelTitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
