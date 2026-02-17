"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./genericVideoPlayer.module.scss";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress } from "react-icons/fa";

const GenericVideoPlayer = ({ videoUrl, poster, title, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Detect video platform
  const getVideoType = (url) => {
    if (!url) return 'invalid';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('dailymotion.com')) return 'dailymotion';
    if (url.match(/\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i)) return 'direct';
    if (url.match(/\.(m3u8|ts)(\?.*)?$/i)) return 'hls';
    if (url.match(/\.(mpd)(\?.*)?$/i)) return 'dash';
    return 'external';
  };

  const videoType = getVideoType(videoUrl);

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getVimeoId = (url) => {
    const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
    if (videoRef.current && videoType === 'direct') {
      if (isPlaying) {
        videoRef.current.play().catch(e => {
          console.error('Playback failed:', e);
          setError(true);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, videoType]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const togglePlay = () => {
    if (videoType === 'direct') {
      setIsPlaying(!isPlaying);
    } else {
      window.open(videoUrl, '_blank');
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(e.target.value);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderVideoPlayer = () => {
    switch (videoType) {
      case 'youtube':
        return (
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=${autoPlay ? 1 : 0}&rel=0`}
            title={title || "YouTube Video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.embeddedPlayer}
          ></iframe>
        );

      case 'vimeo':
        return (
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoId(videoUrl)}?autoplay=${autoPlay ? 1 : 0}&title=0&byline=0&portrait=0`}
            title={title || "Vimeo Video"}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.embeddedPlayer}
          ></iframe>
        );

      case 'direct':
        return (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setError(false)}
            onError={() => setError(true)}
            className={styles.directPlayer}
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        );

      case 'hls':
        return (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            className={styles.directPlayer}
            controls
          >
            <source src={videoUrl} type="application/x-mpegURL" />
          </video>
        );

      default:
        return (
          <div className={styles.externalVideo}>
            <p>This video cannot be embedded.</p>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              Watch Video
            </a>
          </div>
        );
    }
  };

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Failed to load video</p>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          Open video directly
        </a>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`${styles.videoPlayerContainer} ${isFullscreen ? styles.fullscreen : ''}`}
    >
      {renderVideoPlayer()}

      {videoType === 'direct' && (
        <div className={styles.customControls}>
          <button onClick={togglePlay} className={styles.controlButton}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <div className={styles.progressBar}>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className={styles.seekSlider}
            />
          </div>

          <button onClick={toggleMute} className={styles.controlButton}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />

          <button onClick={toggleFullscreen} className={styles.controlButton}>
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      )}
    </div>
  );
};

export default GenericVideoPlayer;