"use client"

const TopVideo = () => {
  return (
    <div className="auto-play-video-container">

      {/* <img className="auto-play-video" src="/assets/vid/testRes.jpg" alt="" /> */}

      <video className="auto-play-video" autoPlay loop muted playsInline>
        <source src="/assets/vid/Sapna Final Song.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TopVideo;
