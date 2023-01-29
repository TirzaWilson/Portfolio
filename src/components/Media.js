import React from 'react';
import './Media.css';

const Media = (props) => {
  return (
    <div className="media-container">
      <h1>Photos</h1>
      <div className="photos-container">
        {props.photos.map((photo) => (
          <img src={photo.src} alt={photo.alt} className="photo" />
        ))}
      </div>
      <h1>Videos</h1>
      <div className="videos-container">
        {props.videos.map((video) => (
          <video src={video.src} className="video" type="video/mp4" controls />
        ))}
      </div>
    </div>
  );
};

export default Media;
