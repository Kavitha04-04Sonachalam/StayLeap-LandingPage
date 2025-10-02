import React, { useState } from 'react';
import { Play } from 'lucide-react';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'Dcx_oU3ly8U'; // Updated YouTube video ID

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See Stay Leap in Action</h2>
          <p className="text-xl text-gray-600">
            Watch how our platform transforms hostel management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {!isPlaying ? (
              <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop"
                  alt="Demo Video Thumbnail"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080`}
                  title="Stay Leap Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
