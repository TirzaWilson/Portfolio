import React from 'react';
import Media from '../Media';

const Gallery = () => {
  const photos = [
    { src: 'images/img-9.jpg', alt: 'Photo 1' },
    { src: '/path/to/photo2.jpg', alt: 'Photo 2' },
    { src: '/path/to/photo3.jpg', alt: 'Photo 3' },
  ];
  const videos = [
    { src: 'videos/video-3.mp4', alt: 'Video 1' },
    { src: '/path/to/video2.mp4', alt: 'Video 2' },
    { src: '/path/to/video3.mp4', alt: 'Video 3' },
  ];

  return (
    <div className="app">
      <Media photos={photos} videos={videos} />
    </div>
  );
};

export default Gallery;