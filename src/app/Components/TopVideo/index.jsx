"use client"

const TopVideo = () => {
  return (
    <div className="auto-play-video-container">

      {/* <img className="auto-play-video" src="/assets/img/check.jpg" alt="" /> */}

      <video className="auto-play-video" autoPlay loop muted playsInline>
        <source src="/assets/vid/hospitalbanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TopVideo;
