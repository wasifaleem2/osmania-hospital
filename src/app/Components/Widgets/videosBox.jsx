"use client";
import React from "react";
import Link from "next/link";
import { FaVideo, FaArrowRight } from "react-icons/fa";
import styles from "./VideosBox.module.scss";

const VideosBox = () => {
  return (
    <div className={styles.videosBox}>
      <div className={styles.boxHeader}>
        <div className={styles.headerIcon}>
          <FaVideo />
        </div>
        <h3>Videos</h3>
        <p className={styles.headerSubtitle}>Learn about health & treatments</p>
      </div>
      
      <div className={styles.videosContent}>
        <p className={styles.description}>
          Watch informative videos about medical procedures, health tips, and hospital services.
        </p>
      </div>
      
      <Link href="/videos" className={styles.videosLink}>
        Browse Videos
        <FaArrowRight className={styles.linkIcon} />
      </Link>
    </div>
  );
};

export default VideosBox;