"use client"
import styles from "./aboutvideo.module.scss";

const AboutVideo = () => {
  return (
    <div className={styles.aboutVideoWrapper}>
      <video
        className={styles.aboutVideo}
        controls
        playsInline
      >
        <source src="/assets/vid/Sapna Final Song.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutVideo;
